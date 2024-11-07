import { connectionPrisma } from '@/utils/trpc/trpcForPrisma'
import { z } from 'zod'
import { errorResponse, successResponse } from '../middlewares'
import {
  addCertificateToProfileSchema,
  certificateUpdateSchema,
} from '../models'

export const certificateRouter = connectionPrisma.router({
  /*TODO: Create a new type, url for credentials*/
  addCertificateToProfile: connectionPrisma.procedure
    .input(addCertificateToProfileSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        const { profileId, certificates } = input
        const updatedProfile = await ctx.prisma.profile.update({
          where: { id: profileId },
          data: {
            certificates: {
              create: certificates,
            },
          },
          include: {
            certificates: true,
          },
        })

        if (!updatedProfile) {
          throw new Error('Erro ao adicionar certificados ao perfil')
        }
        return successResponse(updatedProfile)
      } catch (error) {
        return errorResponse(error as Error)
      }
    }),

  updateCertificate: connectionPrisma.procedure
    .input(certificateUpdateSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        const { id, title, issuer, date } = input

        const updatedCertificate = await ctx.prisma.certificate.update({
          where: { id },
          data: { title, issuer, date },
        })

        if (!updatedCertificate) {
          throw new Error('Erro ao atualizar certificado')
        }
        return successResponse(updatedCertificate)
      } catch (error) {
        return errorResponse(error as Error)
      }
    }),

  deleteCertificate: connectionPrisma.procedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      try {
        const { id } = input

        const deletedCertificate = await ctx.prisma.certificate.delete({
          where: { id },
        })

        if (!deletedCertificate) {
          throw new Error('Erro ao deletar certificado')
        }
        return successResponse(deletedCertificate)
      } catch (error) {
        return errorResponse(error as Error)
      }
    }),
})
