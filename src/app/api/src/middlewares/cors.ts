import { env } from '@/utils/env'
import { createTRPCClient, httpBatchLink } from '@trpc/client'
import type { AppRouter } from '../routers/routerApp'

const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${env.NEXT_PUBLIC_API_URL}`,
      fetch(url, options) {
        return fetch(url, {
          ...options,
          credentials: 'include',
        })
      },
    }),
  ],
})

export { client }
