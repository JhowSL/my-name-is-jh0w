import { z } from 'zod'

const fetchSkillSchema = z.object({
  id: z.string(),
  name: z.string(),
  level: z.string(),
  profileId: z.string(),
})

export type fetchSkill = z.infer<typeof fetchSkillSchema>
