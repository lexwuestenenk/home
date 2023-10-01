import type { Metadata } from 'next'
import Link from 'next/link';
import { CursorFollow } from '@/components/sfx/cursor-follow';
import { DotMatrix } from '@/components/sfx/dot-matrix';
import { Icons } from '@/components/Icons';

export const metadata: Metadata = {
    title: 'Lex Wuestenenk',
    description: 'Generated by create next app',
}

export default function Home() {
    return (
        <div className='bg-background h-screen flex justify-center items-center container select-none overflow-hidden'>
            <CursorFollow />
            <DotMatrix />
            <div className='flex justify-between items-center w-full z-10'>
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
                            <Link href="/cv">Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='absolute bottom-0 left-0 flex justify-between px-48 p-5 text-text w-full text-5xl'>
                <Link href="https://github.com/lexwuestenenk" target='_blank'>
                    <Icons.Github className="ease-in duration-200 hover:text-background" />
                </Link>
                <Link href="discordapp.com/users/299901733943902208" target='_blank'>
                    <Icons.Discord className="ease-in duration-200 hover:text-background" />
                </Link>
                <Link href="https://www.linkedin.com/in/lex-wuestenenk-0b0340294/?locale=nl_NL" target='_blank'>
                    <Icons.LinkedIn className="ease-in duration-200 hover:text-background" />
                </Link>
                <Link href="https://twitter.com/lexwuestenenk" target='_blank'>
                    <Icons.Twitter className="ease-in duration-200 hover:text-background" />
                </Link>
            </div>
        </div> 
    )
}