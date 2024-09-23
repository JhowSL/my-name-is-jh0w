import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../routers';
import { env } from '@/utils/env';



const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${env.NEXT_PUBLIC_API_URL }`|| process.env.NEXT_LOCAL_API_URL as string,
      fetch(url, options) {
        return fetch(url, {
          ...options,
          credentials: 'include',
        });
      },
    }),
  ],
});

export { client }
