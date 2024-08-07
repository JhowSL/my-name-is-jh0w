import { z } from "zod";
import { errorResponse, successResponse } from "../../middlewares";
import {
	addSkillToProfileSchema,
	skillUpdateSchema,
} from "../../models/skills";
import { connectionPrisma } from "../../utils/trpcForPrisma";

export const skillRouter = connectionPrisma.router({
	addSkillsToProfile: connectionPrisma.procedure
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

	updateSkill: connectionPrisma.procedure
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

	deleteSkill: connectionPrisma.procedure
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
