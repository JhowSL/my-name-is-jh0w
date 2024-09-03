import { z } from "zod";
const skillSchema = z.object({
  id: z.string().nonempty("O ID da habilidade é obrigatório"),
});

export const projectSchema = z.object({
  title: z.string().nonempty("O título é obrigatório"),
  description: z.string().nonempty("A descrição é obrigatória"),
  repository: z.string().url("O repositório deve ser uma URL válida"),
  skills: z.array(skillSchema).nonempty("As habilidades são obrigatórias"),
  profileId: z.string().nonempty("O ID do perfil é obrigatório"),
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
