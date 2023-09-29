"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { MainHeader } from '@/components/nav/main-header'
import { usePathname } from 'next/navigation';
import { LayoutConfig } from '@/config/ignore-layout'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const inLayoutConfig = LayoutConfig.routes.includes(pathname)
  console.log(pathname)
  console.log(inLayoutConfig)
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {inLayoutConfig && <MainHeader />}
          {children}
        </ThemeProvider>  
      </body>
    </html>
  )
}
