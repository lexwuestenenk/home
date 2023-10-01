"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <html lang="en" className='overflow-hidden'>
      <body className={inter.className + 'overflow-hidden'}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>  
      </body>
    </html>
  )
}
