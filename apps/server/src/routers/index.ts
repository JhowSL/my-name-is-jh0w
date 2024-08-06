import { initTRPC } from "@trpc/server";
import { contactRouter } from "../controllers/contact-form";

const t = initTRPC.create();

export const appRouter = t.router({
	contact: contactRouter,
});

export type AppRouter = typeof appRouter;
