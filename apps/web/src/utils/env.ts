import dotenv from 'dotenv'
import { z } from 'zod'

dotenv.config()

const envSchema = z.object({
  NEXT_PUBLIC_GITHUB_PROFILE_URL: z.string().url(),
  NEXT_PUBLIC_LINKEDIN_PROFILE_URL: z.string().url(),
  NEXT_PUBLIC_TRPC_URL: z.string().url(),
  NEXT_PUBLIC_PROFILE_IMAGE_URL: z.string().url(),
})

const parsedEnv = {
  NEXT_PUBLIC_GITHUB_PROFILE_URL: process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL,
  NEXT_PUBLIC_LINKEDIN_PROFILE_URL:
    process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL,
  NEXT_PUBLIC_TRPC_URL: process.env.NEXT_PUBLIC_TRPC_URL,
  NEXT_PUBLIC_PROFILE_IMAGE_URL: process.env.NEXT_PUBLIC_PROFILE_IMAGE_URL,
}

const env = (() => {
  try {
    return envSchema.parse(parsedEnv)
  } catch (e) {
    if (e instanceof z.ZodError) {
      console.error('Erro ao validar variáveis de ambiente:', e.errors)
    } else {
      console.error('Erro desconhecido ao validar variáveis de ambiente:', e)
    }
    throw new Error('Missing or invalid environment variables')
  }
})()

export { env }
