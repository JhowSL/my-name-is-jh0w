import { z } from 'zod'

export const profileSchema = z.object({
  profileName: z
    .string()
    .min(5, { message: 'Enter a name for identification' }),
})
