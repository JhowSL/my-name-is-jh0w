import { connectionPrisma } from '@/utils/trpc/trpcForPrisma'
import { z } from 'zod'
import { errorResponse, successResponse, warnResponse } from '../middlewares'
import { addSkillToProfileSchema, skillUpdateSchema } from '../models'

export const skillRouter = connectionPrisma.router({
  getAllSkills: connectionPrisma.procedure.query(async ({ ctx }) => {
    try {
      const skills = await ctx.prisma.skill.findMany()
      if (skills.length === 0) {
        return warnResponse([], ['Nenhuma Skill Encontrada'])
      }
      return skills
    } catch (error) {
      return errorResponse(error as Error)
    }
  }),

  addSkillsToProfile: connectionPrisma.procedure
    .input(addSkillToProfileSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        const { profileId, skills } = input
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
        })

        if (!updatedProfile) {
          throw new Error('Erro ao adicionar habilidades ao perfil')
        }
        return successResponse(updatedProfile)
      } catch (error) {
        return errorResponse(error as Error)
      }
    }),

  updateSkill: connectionPrisma.procedure
    .input(skillUpdateSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        const { id, name, level } = input

        const updatedSkill = await ctx.prisma.skill.update({
          where: { id },
          data: { name, level },
        })

        if (!updatedSkill) {
          throw new Error('Erro ao atualizar habilidade')
        }
        return successResponse(updatedSkill)
      } catch (error) {
        return errorResponse(error as Error)
      }
    }),

  deleteSkill: connectionPrisma.procedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      try {
        const { id } = input

        const deletedSkill = await ctx.prisma.skill.delete({
          where: { id },
        })

        if (!deletedSkill) {
          throw new Error('Erro ao deletar habilidade')
        }
        return successResponse(deletedSkill)
      } catch (error) {
        return errorResponse(error as Error)
      }
    }),
})
