'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export function CreateDropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem className='hover:cursor-pointer'>
					<Link href={"/products/create/"}>Product maken</Link>
				</DropdownMenuItem>
				<DropdownMenuItem className='hover:cursor-pointer'>
					<Link href={"/categories/create/"}>Categorie maken</Link>
				</DropdownMenuItem>
				<DropdownMenuItem className='hover:cursor-pointer'>
					<Link href={"/recipes/create/"}>Recept maken</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}