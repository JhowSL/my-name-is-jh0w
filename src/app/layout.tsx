'use client'

import { trpc } from '../utils/trpc'
import { Footer, Header } from './components'
import { MenuBar } from './components/menu-bar'
import './globals.css'
import { cn } from '@/lib/utils'
import { useMediaQuery } from 'react-responsive'

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  return (
    <html lang="en" suppressHydrationWarning>
      <title>My Name Is Jh0w</title>
      <body className={cn('bg-zinc-950 text-zinc-50 antialiased')}>
        {isMobile ? <MenuBar /> : <Header />}
        <main className="container ">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default trpc.withTRPC(RootLayout)
