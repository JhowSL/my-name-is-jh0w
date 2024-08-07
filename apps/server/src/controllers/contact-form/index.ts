import {
	errorResponse,
	successResponse,
	warnResponse,
} from "../../middlewares";
import { contactFormSchema, idSchema } from "../../models/contact-form";
import { connectionPrisma } from "../../utils/trpcForPrisma";

export const contactRouter = connectionPrisma.router({
	getAllContactForm: connectionPrisma.procedure.query(async ({ ctx }) => {
		try {
			const getAllContactForm = await ctx.prisma.contactForm.findMany();
			if (getAllContactForm.length === 0) {
				return warnResponse([], ["Nenhum formulário encontrado"]);
			}
			return successResponse(getAllContactForm);
		} catch (error) {
			return errorResponse(error as Error);
		}
	}),

	createContactForm: connectionPrisma.procedure
		.input(contactFormSchema)
		.mutation(async ({ ctx, input }) => {
			try {
				const createContactForm = await ctx.prisma.contactForm.create({
					data: contactFormSchema.parse(input),
				});
				if (!createContactForm) {
					throw new Error("Erro ao criar formulário");
				}
				return successResponse(createContactForm);
			} catch (error) {
				return errorResponse(error as Error);
			}
		}),

	findContactForm: connectionPrisma.procedure
		.input(idSchema)
		.query(async ({ input, ctx }) => {
			try {
				const findContactForm = await ctx.prisma.contactForm.findUnique({
					where: idSchema.parse(input),
				});
				if (!findContactForm) {
					throw new Error("Erro ao encontrar formulário");
				}
				return successResponse(findContactForm);
			} catch (error) {
				return errorResponse(error as Error);
			}
		}),

	deleteContactForm: connectionPrisma.procedure
		.input(idSchema)
		.mutation(async ({ input, ctx }) => {
			try {
				const deleteContactForm = await ctx.prisma.contactForm.delete({
					where: {
						id: input.id,
					},
				});
				if (!deleteContactForm) {
					throw new Error("Erro ao deletar formulário");
				}
				return successResponse(deleteContactForm);
			} catch (error) {
				return errorResponse(error as Error);
			}
		}),
});

export type AppRouter = typeof contactRouter;
