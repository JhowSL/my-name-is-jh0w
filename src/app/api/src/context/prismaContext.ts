import { prisma } from '@/utils/prisma'

export async function createContext() {
  return {
    prisma,
  }
}

export type Context = ReturnType<typeof createContext>
