import { z } from "zod";
const envSchema = z.object({
	PORT: z.number().default(3333),
});

export const env = envSchema.parse(process.env);
