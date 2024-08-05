import { initTRPC } from "@trpc/server";
import { z } from "zod";
import type { createContext } from "../../context/context";
import { errorResponse, successResponse } from "../../middlewares";
import {
	addSkillToProfileSchema,
	skillUpdateSchema,
} from "../../models/skills";

const t = initTRPC.context<typeof createContext>().create();

export const skillRouter = t.router({
	addSkillsToProfile: t.procedure
		.input(addSkillToProfileSchema)
		.mutation(async ({ input, ctx }) => {
			try {
				const { profileId, skills } = input;
				const updatedProfile = await ctx.prisma.profile.update({
					where: { id: profileId },
					data: {
						skills: {
							create: skills,
						},
					},
					include: {
						skills: true,
					},
				});

				if (!updatedProfile) {
					throw new Error("Erro ao adicionar habilidades ao perfil");
				}
				return successResponse(updatedProfile);
			} catch (error) {
				return errorResponse(error as Error);
			}
		}),

	updateSkill: t.procedure
		.input(skillUpdateSchema)
		.mutation(async ({ input, ctx }) => {
			try {
				const { id, name, level } = input;

				const updatedSkill = await ctx.prisma.skill.update({
					where: { id },
					data: { name, level },
				});

				if (!updatedSkill) {
					throw new Error("Erro ao atualizar habilidade");
				}
				return successResponse(updatedSkill);
			} catch (error) {
				return errorResponse(error as Error);
			}
		}),

	deleteSkill: t.procedure
		.input(z.object({ id: z.string() }))
		.mutation(async ({ input, ctx }) => {
			try {
				const { id } = input;

				const deletedSkill = await ctx.prisma.skill.delete({
					where: { id },
				});

				if (!deletedSkill) {
					throw new Error("Erro ao deletar habilidade");
				}
				return successResponse(deletedSkill);
			} catch (error) {
				return errorResponse(error as Error);
			}
		}),
});
