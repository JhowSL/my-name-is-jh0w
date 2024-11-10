import { z } from 'zod'
import { certificateSchema } from './certificateModel'
import { skillSchema } from './skillModel'

export const profileSchema = z.object({
  profileName: z.string(),
  skills: z.array(skillSchema),
  certificates: z.array(certificateSchema),
})
