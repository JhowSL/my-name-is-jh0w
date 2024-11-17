import { connectionPrisma } from '@/utils/trpc/trpcForPrisma'
import { z } from 'zod'
import { errorResponse, successResponse, warnResponse } from '../middlewares'
import { profileSchema } from '../models'

export const profileRouter = connectionPrisma.router({
  // Recuperar todos os perfis
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

  // Buscar um perfil específico por ID ou Nome
  findProfile: connectionPrisma.procedure
    .input(
      z
        .object({
          id: z.string().optional(),
          profileName: z.string().optional(),
        })
        .refine(data => data.id ?? data.profileName, {
          message: 'Either id or profileName is required',
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

  // Criar um novo perfil
  createProfile: connectionPrisma.procedure
    .input(profileSchema.omit({ id: true, skills: true })) // `id` é gerado automaticamente
    .mutation(async ({ input, ctx }) => {
      try {
        const existingProfile = await ctx.prisma.profile.findFirst({
          where: { profileName: input.profileName },
        })

        if (existingProfile) {
          return warnResponse(
            { id: existingProfile.id, name: existingProfile.profileName },
            [`Profile ${existingProfile.profileName} already exists`]
          )
        }

        const newProfile = await ctx.prisma.profile.create({
          data: { ...input },
        })

        return successResponse(newProfile)
      } catch (error) {
        return errorResponse(error as Error)
      }
    }),

  // Deletar um perfil por ID ou Nome
  deleteProfile: connectionPrisma.procedure
    .input(
      z
        .object({
          id: z.string().optional(),
          profileName: z.string().optional(),
        })
        .refine(data => data.id ?? data.profileName, {
          message: 'Either id or profileName is required',
        })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        const deletedProfile = await ctx.prisma.profile.delete({
          where: input.id
            ? { id: input.id }
            : { profileName: input.profileName },
        })

        return successResponse(deletedProfile)
      } catch (error) {
        return errorResponse(error as Error)
      }
    }),
})
