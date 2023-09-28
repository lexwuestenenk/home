import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Lex Wuestenenk',
    description: 'Generated by create next app',
}

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="flex flex-col gap-5 text-center z-10">
                <h1
                    className="text-8xl text-blue-500 font-bold"
                >
                    Banaan
                </h1>
            </div>
        </main>
    )
}
  