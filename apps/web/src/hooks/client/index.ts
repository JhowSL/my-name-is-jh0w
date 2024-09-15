import { QueryClient } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import { useState } from 'react'
import { trpc } from '../../lib/trpc'
import { env } from '../../utils/env'

export const useClients = () => {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${env.NEXT_PUBLIC_TRPC_URL}/trpc`,
        }),
      ],
    })
  )
  return { queryClient, trpcClient }
}
