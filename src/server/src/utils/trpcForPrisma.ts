import { initTRPC } from '@trpc/server'
import type { createContext } from '../context/context'

export const connectionPrisma = initTRPC
  .context<typeof createContext>()
  .create()
