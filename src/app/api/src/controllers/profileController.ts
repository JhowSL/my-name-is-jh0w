import { connectionPrisma } from '@/utils/trpc/trpcForPrisma'
import { z } from 'zod'
import { errorResponse, successResponse, warnResponse } from '../middlewares'
import { profileSchema } from '../models'

export const profileRouter = connectionPrisma.router({
  getAllProfiles: connectionPrisma.procedure.query(async ({ ctx }) => {
    try {
      const profiles = await ctx.prisma.profile.findMany()

      return profiles.length === 0
        ? warnResponse(null, ['No profiles found'])
        : successResponse(profiles)
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
        const profile = await ctx.prisma.profile.findFirst({
          where: {
            OR: [{ id: input.id }, { profileName: input.profileName }],
          },
        })

        return profile
          ? successResponse(profile)
          : warnResponse(null, ['Profile not found'])
      } catch (error) {
        return errorResponse(error as Error)
      }
    }),

  createProfile: connectionPrisma.procedure
    .input(profileSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        const existingProfile = await ctx.prisma.profile.findFirst({
          where: { profileName: input.profileName },
        })

        if (existingProfile) {
          return warnResponse(
            {
              id: existingProfile.id,
              profileName: existingProfile.profileName,
            },
            [`Profile ${existingProfile.profileName} exists`]
          )
        }

        const newProfile = await ctx.prisma.profile.create({
          data: {
            profileName: input.profileName,
          },
        })

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
        const deletedProfile = await ctx.prisma.$transaction(
          async transaction => {
            await transaction.profile.delete({
              where: { id: input.id },
            })
          }
        )
        return successResponse(deletedProfile)
      } catch (error) {
        return errorResponse(error as Error)
      }
    }),
})
