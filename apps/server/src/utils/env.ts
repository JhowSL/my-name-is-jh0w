import { config } from 'dotenv'
import { z } from 'zod'

const env = process.env.NODE_ENV || 'development'

config({ path: `.env.${env}` })

const envSchema = z.object({
  PORT_BACK: z.number().default(3333),
  DATABASE_URL: z.string().url(),
  NEXT_PUBLIC_BACKEND_URL: z.string().url(), // Adicione esta linha
})

const parsedEnv = {
  PORT_BACK: Number(process.env.PORT_BACK),
  DATABASE_URL: process.env.DATABASE_URL,
  NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL, // Adicione esta linha
}

export const envConfig = envSchema.parse(parsedEnv)
