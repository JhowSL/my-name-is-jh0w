import { contactRouter } from "../controllers/contact-form";
import { profileRouter } from "../controllers/profile";
import { skillRouter } from "../controllers/skills";
import { router } from "../utils/trpc";

export const appRouter = router({
	contact: contactRouter,
	profile: profileRouter,
	skill: skillRouter,
});

export type AppRouter = typeof appRouter;
