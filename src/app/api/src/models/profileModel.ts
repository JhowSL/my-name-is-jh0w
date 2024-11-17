import { z } from 'zod'

export const profileSchema = z.object({
  id: z.string().optional(),
  profileName: z.string().min(1, 'O nome é obrigatório'),
  skills: z.array(z.string()).optional(),
})

export type Profile = z.infer<typeof profileSchema>
