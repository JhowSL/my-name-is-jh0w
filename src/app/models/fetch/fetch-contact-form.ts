import { z } from 'zod'

export const fetchContactFormSchema = z.object({
  name: z.string(),
  contactEmail: z.string().email(),
  message: z.string().max(500),
})

export type fetchContactForm = z.infer<typeof fetchContactFormSchema>
