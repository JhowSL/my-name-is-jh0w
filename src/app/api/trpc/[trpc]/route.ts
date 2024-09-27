import { prisma } from '@/utils/prisma/prismaClient'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter } from '../../src/routers/routerApp'

function handler(req: Request) {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => ({ prisma }),
  })
}

export { handler as GET, handler as POST }
