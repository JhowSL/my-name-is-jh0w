'use client'


import { Footer, Header, MenuBar } from '@/components'
import './globals.css'
import { cn } from '@/lib/utils'
import { useMediaQuery } from 'react-responsive'
import { trpc } from '@/utils/trpc'

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  return (
    <html lang="en" suppressHydrationWarning>
      <title>My Name Is Jh0w</title>
      <body className={cn('container bg-zinc-950 text-zinc-50 antialiased')}>
        {isMobile ? <MenuBar /> : <Header />}
        <main className="grid">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default trpc.withTRPC(RootLayout)
