"use client"

import { ThemeToggle } from '@/components/toggles/theme-toggle'
import { MainNav } from '@/components/nav/main-nav'
import { CreateDropdown } from '@/components/nav/create-dropdown';

export function MainHeader() {
	return (
		<div className='border-b'>
			<div className='flex h-16 items-center px-4'>
				<MainNav className='mx-6' />
				<div className='ml-auto flex items-center space-x-4'>
					<ThemeToggle />
					<CreateDropdown />
				</div>
			</div>
		</div>
	)
}