import { z } from "zod";

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  repository: z.string().url(),
  technologies: z.array(
    z.object({
      id: z.string(),
      skill: z.object({
        id: z.string(),
        name: z.string(),
      }),
      projectId: z.string(),
    }),
  ),
});

export type ProjectModel = z.infer<typeof projectSchema>;
