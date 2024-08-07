import { z } from "zod";

export const idSchema = z.object({ id: z.string() });

export const contactFormSchema = z.object({
	name: z.string(),
	contactEmail: z.string().email(),
	message: z.string().max(500),
});

export type ContactFormModel = z.infer<typeof contactFormSchema>;
