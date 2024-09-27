import { z } from 'zod'
import { certificateSchema } from './certificateModel'
import { skillSchema } from './skillModel'

export const idSchema = z.object({ id: z.string() })

export const profileSchema = z.object({
  skills: z.array(skillSchema),
  certificates: z.array(certificateSchema),
})
