import { z } from 'zod'

export const categorySchema = z.object({
  id: z.string().optional(), // Será gerado automaticamente
  name: z.string().min(1, 'O nome da categoria é obrigatório'),
  skills: z.array(z.string()).optional(), // IDs das skills associadas
})

export type Category = z.infer<typeof categorySchema>
