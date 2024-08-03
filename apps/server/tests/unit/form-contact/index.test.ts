import * as crypto from "node:crypto";
import { PrismaClient } from "@prisma/client";
import { initTRPC } from "@trpc/server";
import { contactRouter } from "../../../src/controllers/contact-form";
import type { ContactFormModel } from "../../../src/models/contact-form";
import { envConfig } from "../../../src/utils/env";

// Configure o Prisma Client para testes
const prisma = new PrismaClient({
	datasources: {
		db: {
			url: envConfig.DATABASE_URL, // Certifique-se de ter uma URL de conexão para o banco de dados de testes
		},
	},
});

// Crie um contexto de teste
const createContext = () => {
	return { prisma };
};

const t = initTRPC.context<typeof createContext>().create();

// Crie um AppRouter de teste
const appRouter = t.router({
	contact: contactRouter,
});

// Funções utilitárias para gerar dados de teste
const generateEmail = () => {
	const randomString = crypto.randomBytes(10).toString("hex");
	return `${randomString}@example.com`;
};

const generate = () => crypto.randomBytes(20).toString("hex");

describe("Contact Router", () => {
	beforeAll(async () => {
		// Limpe o banco de dados antes dos testes
		await prisma.contactForm.deleteMany({});
	});

	afterAll(async () => {
		// Feche a conexão com o banco de dados após os testes
		await prisma.$disconnect();
	});

	test("Should create contact forms", async () => {
		const form1: ContactFormModel = {
			name: generate(),
			contactEmail: generateEmail(),
			message: generate(),
		};

		const form2: ContactFormModel = {
			name: generate(),
			contactEmail: generateEmail(),
			message: generate(),
		};

		const form3: ContactFormModel = {
			name: generate(),
			contactEmail: generateEmail(),
			message: generate(),
		};

		const caller = appRouter.createCaller(createContext());

		const response1 = await caller.contact.createContactForm(form1);
		const response2 = await caller.contact.createContactForm(form2);
		const response3 = await caller.contact.createContactForm(form3);

		console.log("Response 1:", response1);
		console.log("Response 2:", response2);
		console.log("Response 3:", response3);
		console.log("Database URL:", envConfig.DATABASE_URL);

		if ("data" in response1) {
			expect(response1.data).toMatchObject(form1);
		} else {
			console.error("Error response 1:", response1);
			throw new Error(response1.message);
		}

		if ("data" in response2) {
			expect(response2.data).toMatchObject(form2);
		} else {
			console.error("Error response 2:", response2);
			throw new Error(response2.message);
		}

		if ("data" in response3) {
			expect(response3.data).toMatchObject(form3);
		} else {
			console.error("Error response 3:", response3);
			throw new Error(response3.message);
		}
	});
});
