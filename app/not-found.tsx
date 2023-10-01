import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Lex Wuestenenk • 404',
    description: '404 • Page not found',
}

export default function Page404() {
    return (
        <div className='h-screen flex justify-center items-center flex-col select-none'>
            <h1 className='text-text text-5xl z-10 ease-in duration-300 hover:text-background'>404</h1>
            <p className='text-primary z-10'>Misschien zocht je wat anders?</p>
        </div>
    )
}
  