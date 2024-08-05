import { initTRPC } from "@trpc/server";
import { z } from "zod";
import type { createContext } from "../../context/context";
import {
	errorResponse,
	successResponse,
	warnResponse,
} from "../../middlewares";
import { idSchema, profileSchema } from "../../models/profile";

const t = initTRPC.context<typeof createContext>().create();

export const profileRouter = t.router({
	getAllProfiles: t.procedure.query(async ({ ctx }) => {
		try {
			const profiles = await ctx.prisma.profile.findMany({
				include: {
					skills: true,
				},
			});

			if (profiles.length === 0) {
				return warnResponse([], ["Nenhum perfil encontrado"]);
			}

			return profiles;
		} catch (error) {
			return errorResponse(error as Error);
		}
	}),

	findProfile: t.procedure
		.input(z.object({ id: z.string() }))
		.query(async ({ input, ctx }) => {
			try {
				const findProfile = await ctx.prisma.profile.findUnique({
					where: { id: input.id },
					include: {
						skills: true,
					},
				});
				if (!findProfile) {
					throw new Error("Erro ao encontrar Perfil");
				}
				return successResponse(findProfile);
			} catch (error) {
				return errorResponse(error as Error);
			}
		}),

	createProfile: t.procedure
		.input(profileSchema)
		.mutation(async ({ input, ctx }) => {
			try {
				const newProfile = await ctx.prisma.profile.create({
					data: {
						...input,
						skills: {
							create: input.skills,
						},
					},
				});
				if (!newProfile) {
					throw new Error("Erro ao criar perfil");
				}
				return successResponse(newProfile);
			} catch (error) {
				return errorResponse(error as Error);
			}
		}),

	deleteProfile: t.procedure
		.input(idSchema)
		.mutation(async ({ input, ctx }) => {
			try {
				await ctx.prisma.skill.deleteMany({
					where: {
						profileId: input.id,
					},
				});

				const deleteProfile = await ctx.prisma.profile.delete({
					where: {
						id: input.id,
					},
				});

				if (!deleteProfile) {
					throw new Error("Erro ao deletar perfil");
				}

				return successResponse(deleteProfile);
			} catch (error) {
				return errorResponse(error as Error);
			}
		}),
});
