import { prisma } from '@repo/db'

export async function createContext() {
  return {
    prisma,
  }
}

export type Context = ReturnType<typeof createContext>
