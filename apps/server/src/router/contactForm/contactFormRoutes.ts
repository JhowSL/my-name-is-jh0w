import { initTRPC } from "@trpc/server";
import type { createContext } from "../../context/context";
import { contactFormSchema, idSchema } from "../../models/contactForm";

const t = initTRPC.context<typeof createContext>().create();

export const appRouter = t.router({
	// Call all Contact Formulary
	getAllContactForm: t.procedure.query(async ({ ctx }) => {
		const getAllContactForm = await ctx.prisma.contactForm.findMany();
		if (getAllContactForm.length === 0) {
			throw new Error("Nenhum formulário encontrado");
		}
		return getAllContactForm;
	}),

	// Create Contact Form
	createContactForm: t.procedure
		.input(contactFormSchema)
		.mutation(async ({ ctx, input }) => {
			const createContactForm = await ctx.prisma.contactForm.create({
				data: contactFormSchema.parse(input),
			});
			if (!createContactForm) {
				throw new Error("Erro ao criar formulário");
			}
			return createContactForm;
		}),

	//Find Contact Form
	findContactForm: t.procedure.input(idSchema).query(({ input, ctx }) => {
		const findContactForm = ctx.prisma.contactForm.findUnique({
			where: idSchema.parse(input),
		});
		if (!findContactForm) {
			throw new Error("Erro ao encontrar formulário");
		}
		return findContactForm;
	}),

	// Delete Contact Form
	deleteContactForm: t.procedure.input(idSchema).mutation(({ input, ctx }) => {
		const deleteContactForm = ctx.prisma.contactForm.delete({
			where: {
				id: input.id,
			},
		});
		if (!deleteContactForm) {
			throw new Error("Erro ao deletar formulário");
		}
		return deleteContactForm;
	}),
});

export type AppRouter = typeof appRouter;
