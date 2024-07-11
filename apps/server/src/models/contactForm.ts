import { z } from "zod";

export const idSchema = z.object({ id: z.string() });

export const contactFormSchema = z.object({
	_id: z.string().uuid().optional(),
	name: z.string(),
	contactEmail: z.string().email(),
	message: z.string(),
	dataSent: z.string().datetime().optional(),
});

export type ContactFormModel = z.infer<typeof contactFormSchema>;
