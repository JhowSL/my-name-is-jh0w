import { z } from 'zod'

export const idSchema = z.object({ id: z.string() })

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'Insira um nome para identificação' }),
  contactEmail: z
    .string({ message: 'Insira um e-mail válido' })
    .email({ message: 'Insira um e-mail válido' }),
  message: z
    .string({ message: 'Insira no mínimo 10 caracteres e no máximo 500' })
    .min(10, { message: 'Insira no mínimo 10 caracteres' })
    .max(500, { message: 'Insira no máximo 500' }),
})

export type ContactFormModel = z.infer<typeof contactFormSchema>
