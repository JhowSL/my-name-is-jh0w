import { z } from "zod";
import {
	errorResponse,
	successResponse,
	warnResponse,
} from "../../middlewares";
import { projectSchema, updateProjectSchema } from "../../models/project";
import { connectionPrisma } from "../../utils/trpcForPrisma";

export const projectRouter = connectionPrisma.router({
	getAllProjects: connectionPrisma.procedure.query(async ({ ctx }) => {
		try {
			const projects = await ctx.prisma.project.findMany({
				include: {
					technologies: true,
				},
			});

			if (projects.length === 0) {
				return warnResponse([], ["Nenhum projeto encontrado"]);
			}

			return projects;
		} catch (error) {
			return errorResponse(error as Error);
		}
	}),

	createProject: connectionPrisma.procedure
		.input(projectSchema)
		.mutation(async ({ input, ctx }) => {
			try {
				const { title, description, repository, skills } = input;
				if (!title) throw new Error("O título é obrigatório");
				if (!description) throw new Error("A descrição é obrigatória");
				if (!repository) throw new Error("O repositório é obrigatório");

				const newProject = await ctx.prisma.project.create({
					data: {
						title,
						description,
						repository,
						technologies: {
							create: skills.map((skill) => ({
								skill: { connect: { id: skill.id } },
							})),
						},
					},
				});

				if (!newProject) {
					throw new Error("Erro ao criar Projeto");
				}
				return successResponse(newProject);
			} catch (error) {
				return errorResponse(error as Error);
			}
		}),

	findProject: connectionPrisma.procedure
		.input(z.object({ id: z.string() }))
		.query(async ({ input, ctx }) => {
			try {
				const { id } = input;

				if (!id) throw new Error("O ID é obrigatório");

				const project = await ctx.prisma.project.findUnique({
					where: { id },
				});

				if (!project) {
					throw new Error("Projeto não encontrado");
				}
				return successResponse(project);
			} catch (error) {
				return errorResponse(error as Error);
			}
		}),

	deleteProject: connectionPrisma.procedure
		.input(z.object({ id: z.string() }))
		.mutation(async ({ input, ctx }) => {
			const { id } = input;
			const prisma = ctx.prisma;

			try {
				const deletedProject = await prisma.$transaction(
					async (transaction) => {
						await transaction.projectSkill.deleteMany({
							where: { projectId: id },
						});
						const project = await transaction.project.delete({
							where: { id },
						});

						if (!project) {
							throw new Error("Erro ao deletar Projeto");
						}

						return project;
					},
				);

				return successResponse(deletedProject);
			} catch (error) {
				return errorResponse(error as Error);
			}
		}),
});
