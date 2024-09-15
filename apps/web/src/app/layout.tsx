'use client'

import '@repo/ui/globals.css'
import { cn } from '@repo/ui/cn'
import { QueryClientProvider } from '@tanstack/react-query'
import type { ReactElement } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { MenuBar } from '../components/menu-bar'
import { useClients } from '../hooks/client'
import { trpc } from '../lib/trpc'

export default function Layout({
  children,
}: Readonly<{ children: ReactElement }>) {
  const { trpcClient, queryClient } = useClients()
  const isMobile = useMediaQuery({ maxWidth: 640 }) // Definir a largura máxima para mobile
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <html lang="en" suppressHydrationWarning>
          <title>My Name Is Jh0w</title>
          <body className={cn('bg-zinc-950 text-zinc-50 antialiased')}>
            {isMobile ? <MenuBar /> : <Header />}
            <main className="container">{children}</main>
            <Footer />
          </body>
        </html>
      </QueryClientProvider>
    </trpc.Provider>
  )
}
