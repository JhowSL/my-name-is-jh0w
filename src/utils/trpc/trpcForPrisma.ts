import type { createContext } from '@/app/api/src/context/prismaContext'
import { initTRPC } from '@trpc/server'

export const connectionPrisma = initTRPC
  .context<typeof createContext>()
  .create()
