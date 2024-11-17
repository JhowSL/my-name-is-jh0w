import z from 'zod'
import { categorySchema, profileSchema, skillSchema } from '.'

export const skillWithRelationsSchema = skillSchema.extend({
  profile: profileSchema.optional(), // Dados completos do Profile
  category: categorySchema.optional(), // Dados completos da Category
})

export type SkillWithRelations = z.infer<typeof skillWithRelationsSchema>

export const profileWithSkillsSchema = profileSchema.extend({
  skills: z.array(skillSchema).optional(), // Lista completa das Skills associadas
})

export type ProfileWithSkills = z.infer<typeof profileWithSkillsSchema>

export const categoryWithSkillsSchema = categorySchema.extend({
  skills: z.array(skillSchema).optional(), // Lista completa das Skills associadas
})

export type CategoryWithSkills = z.infer<typeof categoryWithSkillsSchema>
