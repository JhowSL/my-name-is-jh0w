import { initTRPC } from "@trpc/server";
import { contactRouter } from "../controllers/contact-form";
import { profileRouter } from "../controllers/profile";
import { skillRouter } from "../controllers/skills";

const t = initTRPC.create();

export const appRouter = t.router({
	contact: contactRouter,
	profile: profileRouter,
	skill: skillRouter,
});

export type AppRouter = typeof appRouter;
