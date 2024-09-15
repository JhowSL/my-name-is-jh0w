'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { useClients } from '../hooks/client'
import { trpc } from '../lib/trpc'

export default function MyApp({ Component, pageProps }: AppProps) {
  const { trpcClient, queryClient } = useClients()

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </trpc.Provider>
  )
}
