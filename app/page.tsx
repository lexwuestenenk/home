import type { Metadata } from 'next'
import Link from 'next/link';
import { CursorFollow } from '@/components/sfx/cursor-follow';
import { Icons } from '@/components/Icons';
import { SocialsBar } from '@/components/ui/socials-bar';

export const metadata: Metadata = {
    title: 'Lex Wuestenenk',
    description: 'Generated by create next app',
}

export default function Home() {
    return (
        <div className='bg-background h-screen flex flex-col justify-center overflow-clip select-none'>
            <CursorFollow />
            <div className='flex flex-row justify-between p-3 h-[6vh] border-primary sticky top-0 left-0'></div>
            <div className='flex flex-col md:flex-row flex-grow justify-between md:justify-between items-center w-full z-10 container'>
                <div className='text-5xl'>
                    <h1 className='text-text'>Lex</h1>
                    <h1 className='text-primary'>Wuestenenk</h1>
                </div>
                <div className='text-2xl pr-2'>
                    <ul>
                        <li className='mb-3 text-text flex flex-row items-center gap-3 hover:cursor-pointer hover:text-secondary ease-in duration-200'>
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li className='mb-3 text-primary flex flex-row items-center gap-3 hover:cursor-pointer hover:text-secondary ease-in duration-200'>
                            <Link href="/resume">Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <SocialsBar />
        </div> 
    )
}