import { connectionPrisma } from '@/utils/trpc/trpcForPrisma'
import { z } from 'zod'
import { errorResponse, successResponse, warnResponse } from '../middlewares'
import { profileSchema } from '../models'

export const profileRouter = connectionPrisma.router({
  getAllProfiles: connectionPrisma.procedure.query(async ({ ctx }) => {
    try {
      const profiles = await ctx.prisma.profile.findMany({
        include: {
          skills: true,
          certificates: true,
        },
      })

      if (profiles.length === 0) {
        return warnResponse([], ['Nenhum perfil encontrado'])
      }

      return profiles
    } catch (error) {
      return errorResponse(error as Error)
    }
  }),

  findProfile: connectionPrisma.procedure
    .input(
      z.object({
        id: z.string().optional(),
        profileName: z.string().optional(),
      })
    )
    .query(async ({ input, ctx }) => {
      try {
        const findProfile = await ctx.prisma.profile.findFirst({
          where: {
            OR: [{ id: input.id }, { profileName: input.profileName }],
          },
          include: {
            skills: true,
            certificates: true,
          },
        })
        if (!findProfile) {
          return warnResponse(null, ['Erro ao encontrar Perfil'])
        }
        return successResponse(findProfile)
      } catch (error) {
        return errorResponse(error as Error)
      }
    }),

  createProfile: connectionPrisma.procedure
    .input(profileSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        const newProfile = await ctx.prisma.profile.create({
          data: {
            ...input,
            skills: {
              create: input.skills,
            },
            certificates: {
              create: input.certificates,
            },
          },
        })
        if (!newProfile) {
          return warnResponse(null, ['Erro ao criar perfil'])
        }
        return successResponse(newProfile)
      } catch (error) {
        return errorResponse(error as Error)
      }
    }),

  deleteProfile: connectionPrisma.procedure
    .input(
      z.object({
        id: z.string().optional(),
        profileName: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.skill.deleteMany({
          where: {
            profileId: input.id,
          },
        })
        await ctx.prisma.certificate.deleteMany({
          where: {
            profileId: input.id,
          },
        })
        const deleteProfile = await ctx.prisma.profile.delete({
          where: {
            id: input.id,
          },
        })

        if (!deleteProfile) {
          return warnResponse(null, ['Erro ao deletar perfil'])
        }

        return successResponse(deleteProfile)
      } catch (error) {
        return errorResponse(error as Error)
      }
    }),
})
