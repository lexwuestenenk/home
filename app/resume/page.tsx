import type { Metadata } from 'next'
import { CursorFollow } from '@/components/sfx/cursor-follow';
import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import { SocialsBar } from '@/components/ui/socials-bar';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Lex Wuestenenk',
    description: 'All projects I have been working on.',
}

export default function Projects() {
    return (
        <div className='bg-background h-screen flex flex-col justify-center select-none'>
            <CursorFollow />
            <div className='flex flex-row justify-between p-3 h-[6vh] border-primary sticky top-0 left-0'>
                <Button asChild className='bg-transparent text-primary border-4 border-transparent hover:border-background hover:text-background hover:bg-transparent duration-300 ease-in'>
                    <Link href="/">
                        <Icons.ChevronLeft />
                    </Link>
                </Button>
                <div className='flex flex-row'>
                    <h1 className='md:text-transparent text-center text-text align-right flex items-center text-3xl'>My</h1>
                    <h1 className='md:text-transparent text-center text-primary align-right flex items-center text-3xl pr-3'>&nbsp;Projects</h1>
                </div>
            </div>
            <div className='flex grow md:flex-row flex-col justify-between z-10 container h-[82vh]'>
                <div className='text-5xl my-auto sticky text-center text-start pb-3'>
                    <h1 className='hidden md:block md:text-text'>My</h1>
                    <h1 className='hidden md:block md:text-primary'>Resume</h1>
                </div>
                <div className='md:w-2/4 flex flex-col gap-3 overflow-scroll px-5'>
                </div>
            </div>
            <SocialsBar />
        </div> 
    )
}