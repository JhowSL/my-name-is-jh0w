import { z } from "zod";

export const skillSchema = z.object({
	name: z.string(),
	level: z.string(),
});
export const skillUpdateSchema = skillSchema.extend({
	id: z.string(),
});
export const addSkillToProfileSchema = z.object({
	profileId: z.string(),
	skills: z.array(skillSchema),
});
