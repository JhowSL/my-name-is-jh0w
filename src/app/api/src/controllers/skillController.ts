import { skillSchema } from '@/app/api/src/models'
import { connectionPrisma } from '@/utils/trpc/trpcForPrisma'
import { z } from 'zod'
import { errorResponse, successResponse, warnResponse } from '../middlewares'

export const skillRouter = connectionPrisma.router({
  // Recuperar todas as habilidades
  getAllSkills: connectionPrisma.procedure.query(async ({ ctx }) => {
    try {
      const skills = await ctx.prisma.skill.findMany({
        include: {
          category: true, // Inclui detalhes da categoria
        },
      })

      return skills.length === 0
        ? warnResponse([], ['Nenhuma Skill Encontrada'])
        : successResponse(skills)
    } catch (error) {
      return errorResponse(error as Error)
    }
  }),

  // Adicionar habilidades a um perfil
  addSkillsToProfile: connectionPrisma.procedure
    .input(
      z.object({
        profileId: z.string().min(1, 'Profile ID é obrigatório'),
        skills: z.array(
          skillSchema.omit({ id: true, profileId: true }) // Remove `id` e `profileId` da entrada
        ),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        const { profileId, skills } = input

        const updatedProfile = await ctx.prisma.profile.update({
          where: { id: profileId },
          data: {
            skills: {
              create: skills.map(skill => ({
                name: skill.name,
                categoryId: skill.categoryId,
              })),
            },
          },
          include: { skills: true }, // Retorna as habilidades atualizadas
        })

        return successResponse(updatedProfile)
      } catch (error) {
        return errorResponse(error as Error)
      }
    }),

  // Atualizar uma habilidade
  updateSkill: connectionPrisma.procedure
    .input(
      skillSchema.extend({
        id: z.string().min(1, 'Skill ID é obrigatório'),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        const { id, name, categoryId } = input

        const updatedSkill = await ctx.prisma.skill.update({
          where: { id },
          data: { name, categoryId },
        })

        return successResponse(updatedSkill)
      } catch (error) {
        return errorResponse(error as Error)
      }
    }),

  // Deletar uma habilidade
  deleteSkill: connectionPrisma.procedure
    .input(
      z.object({
        id: z.string().min(1, 'Skill ID é obrigatório'),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        const deletedSkill = await ctx.prisma.skill.delete({
          where: { id: input.id },
        })

        return successResponse(deletedSkill)
      } catch (error) {
        return errorResponse(error as Error)
      }
    }),

  // Buscar habilidades por categoria
  getSkillsByCategory: connectionPrisma.procedure
    .input(
      z.object({
        categoryId: z.string().min(1, 'Category ID é obrigatório'),
      })
    )
    .query(async ({ input, ctx }) => {
      try {
        const skills = await ctx.prisma.skill.findMany({
          where: { categoryId: input.categoryId },
          include: { category: true },
        })

        return skills.length === 0
          ? warnResponse([], ['Nenhuma Skill Encontrada para esta Categoria'])
          : successResponse(skills)
      } catch (error) {
        return errorResponse(error as Error)
      }
    }),
})
