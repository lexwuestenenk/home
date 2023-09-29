import Link from 'next/link'
import { menuConfig } from '@/config/menu'

import { cn } from '@/lib/utils'
import React from 'react'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuItem,
	NavigationMenuLink
} from '@/components/ui/navigation-menu'

export function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={cn(
				'flex items-center space-x-4 lg:space-x-6',
				className
			)}
			{...props}
		>
			<NavigationMenu>
				<NavigationMenuList>
					{menuConfig.mainNav.map((navItem) => (
						<NavigationMenuItem key={navItem.title}>
							{navItem.items ? (
								<>
									<NavigationMenuTrigger>
										{navItem.title}
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
											{navItem.items.map((item) => (
												<ListItem
													key={item.title}
													title={item.title}
													href={item.href}
												>
													{item.description}
												</ListItem>
											))}
										</ul>
									</NavigationMenuContent>
								</>
							) : (
								<Link
									href={navItem.href}
									legacyBehavior
									passHref
								>
									<NavigationMenuLink>
										{navItem.title}
									</NavigationMenuLink>
								</Link>
							)}
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
		</nav>
	)
}

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}
				>
					<div className='text-sm font-medium leading-none'>
						{title}
					</div>
					<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})

ListItem.displayName = 'ListItem'