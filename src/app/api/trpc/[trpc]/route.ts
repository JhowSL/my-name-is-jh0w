import { appRouter } from '@/server/src/routers'
import { PrismaClient } from '@prisma/client'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

const prisma = new PrismaClient()

function handler(req: Request) {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => ({ prisma }),
  })
}

export { handler as GET, handler as POST }
