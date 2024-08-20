import { z } from "zod";

export const idSchema = z.object({ id: z.string() });

export const fetchcontactFormSchema = z.object({
  id: z.string(),
  name: z.string(),
  contactEmail: z.string().email(),
  message: z.string().max(500),
  dataSent: z.string().datetime(),
});

export type FetchContactFormModel = z.infer<typeof fetchcontactFormSchema>;
