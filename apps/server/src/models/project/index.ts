import { z } from "zod";

export const projectSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  repository: z.string().url().optional(),
  skills: z.array(
    z.object({
      id: z.string(),
    }),
  ),
  profileId: z.string(),
});

export const updateProjectSchema = z.object({
  id: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  repository: z.string().url().optional(),
  skills: z.array(
    z.object({
      id: z.string(),
    }),
  ),
});
