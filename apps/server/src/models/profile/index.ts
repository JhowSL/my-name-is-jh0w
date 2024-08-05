import { z } from "zod";
import { skillSchema } from "../skills";

export const idSchema = z.object({ id: z.string() });

export const profileSchema = z.object({
	skills: z.array(skillSchema),
});
