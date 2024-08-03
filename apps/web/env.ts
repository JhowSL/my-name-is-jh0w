import { z } from "zod";
const envSchema = z.object({
	url: z.string().url(),
});

export const env = envSchema.parse(process.env);
