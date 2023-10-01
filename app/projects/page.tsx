import type { Metadata } from 'next'
import { CursorFollow } from '@/components/sfx/cursor-follow';
import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Lex Wuestenenk',
    description: 'All projects I have been working on.',
}

export default function Projects() {
    return (
        <div className='bg-background h-screen flex flex-col justify-center overflow-clip select-none'>
            <CursorFollow />
            <div className='flex w-full pointer-events-none z-10'>
                <Button asChild className='cursor-pointer pointer-events-auto bg-transparent w-1/8 border-2 border-primary hover:bg-transparent top-0 left-0 m-5 text-text'>
                    <Link href="/">
                        Back to homepage
                    </Link>
                </Button>
            </div>
            <div className='flex flex-col md:flex-row overflow-scroll mb-[9vh] h-full justify-between md:justify-between items-center w-full z-10 pointer-events-none container'>
                <div className='text-5xl mb-3'>
                    <h1 className='text-text'>My</h1>
                    <h1 className='text-primary'>Projects</h1>
                </div>
                <div className='flex flex-col gap-3 md:pt-[15vh]'>
                    <Link href="# ">
                        <div className='border-2 border-primary rounded-md p-3 m-3 max-w-md text-text bg-background ease-in duration-300 hover:bg-primary cursor-pointer pointer-events-auto'>
                            <div className='flex flex-row justify-between gap-5'>
                                <h2 className='text-3xl mb-3'>Portfolio</h2>
                                <Icons.Link />
                            </div>
                            <p>
                                The site you are looking at right now. I build this when I started hosting websites on my Raspberry Pi, so I had something to host and could practice a bit of frontend. 
                            </p>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className='border-2 border-primary rounded-md p-3 m-3 max-w-md text-text bg-background ease-in duration-300 hover:bg-primary cursor-pointer pointer-events-auto'>
                            <div className='flex flex-row justify-between gap-5'>
                                <h2 className='text-3xl mb-3'>Portfolio</h2>
                                <Icons.Link />
                            </div>
                            <p>
                                The site you are looking at right now. I build this when I started hosting websites on my Raspberry Pi, so I had something to host and could practice a bit of frontend. 
                            </p>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className='border-2 border-primary rounded-md p-3 m-3 max-w-md text-text bg-background ease-in duration-300 hover:bg-primary cursor-pointer pointer-events-auto'>
                            <div className='flex flex-row justify-between gap-5'>
                                <h2 className='text-3xl mb-3'>Portfolio</h2>
                                <Icons.Link />
                            </div>
                            <p>
                                The site you are looking at right now. I build this when I started hosting websites on my Raspberry Pi, so I had something to host and could practice a bit of frontend. 
                            </p>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className='border-2 border-primary rounded-md p-3 m-3 max-w-md text-text bg-background ease-in duration-300 hover:bg-primary cursor-pointer pointer-events-auto'>
                            <div className='flex flex-row justify-between gap-5'>
                                <h2 className='text-3xl mb-3'>Portfolio</h2>
                                <Icons.Link />
                            </div>
                            <p>
                                The site you are looking at right now. I build this when I started hosting websites on my Raspberry Pi, so I had something to host and could practice a bit of frontend. 
                            </p>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className='border-2 border-primary rounded-md p-3 m-3 max-w-md text-text bg-background ease-in duration-300 hover:bg-primary cursor-pointer pointer-events-auto'>
                            <div className='flex flex-row justify-between gap-5'>
                                <h2 className='text-3xl mb-3'>Portfolio</h2>
                                <Icons.Link />
                            </div>
                            <p>
                                The site you are looking at right now. I build this when I started hosting websites on my Raspberry Pi, so I had something to host and could practice a bit of frontend. 
                            </p>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className='border-2 border-primary rounded-md p-3 m-3 max-w-md text-text bg-background ease-in duration-300 hover:bg-primary cursor-pointer pointer-events-auto'>
                            <div className='flex flex-row justify-between gap-5'>
                                <h2 className='text-3xl mb-3'>Portfolio</h2>
                                <Icons.Link />
                            </div>
                            <p>
                                The site you are looking at right now. I build this when I started hosting websites on my Raspberry Pi, so I had something to host and could practice a bit of frontend. 
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='fixed bottom-0 left-0 flex justify-between px-12 lg:px-48 p-5 text-text w-full text-5xl'>
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