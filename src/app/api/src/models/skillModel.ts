import { z } from 'zod'

export const skillSchema = z.object({
  id: z.string().optional(), // Será gerado automaticamente
  name: z.string().min(1, 'O nome da skill é obrigatório'),
  profileId: z.string().min(1, 'ID do Profile é obrigatório'),
  categoryId: z.string().min(1, 'ID da Category é obrigatório'),
})

export type Skill = z.infer<typeof skillSchema>
