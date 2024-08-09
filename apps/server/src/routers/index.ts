import { certificateRouter } from "../controllers/certificate";
import { contactRouter } from "../controllers/contact-form";
import { profileRouter } from "../controllers/profile";
import { projectRouter } from "../controllers/project";

import { skillRouter } from "../controllers/skills";
import { router } from "../utils/trpc";

export const appRouter = router({
	contact: contactRouter,
	profile: profileRouter,
	skill: skillRouter,
	certificate: certificateRouter,
	project: projectRouter,
});

export type AppRouter = typeof appRouter;
