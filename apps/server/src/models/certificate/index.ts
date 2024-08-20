import { z } from "zod";

export const certificateSchema = z.object({
  title: z.string(),
  issuer: z.string(),
  date: z.string().date(),
});

export const certificateUpdateSchema = certificateSchema.extend({
  id: z.string(),
});

export const addCertificateToProfileSchema = z.object({
  profileId: z.string(),
  certificates: z.array(certificateSchema),
});
