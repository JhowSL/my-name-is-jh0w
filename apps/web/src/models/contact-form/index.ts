import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string(),
  contactEmail: z.string().email(),
  message: z.string().max(500),
});

export type ContactFormModel = z.infer<typeof contactFormSchema>;
