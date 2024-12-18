'use client'

import { Footer, Header, SideBar } from '@/components/layout'
import './globals.css'
import { cn } from '@/lib/cn'
import { trpc } from '@/utils/trpc/trpc'
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
        {isMobile ? <SideBar /> : <Header />}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default trpc.withTRPC(RootLayout)
