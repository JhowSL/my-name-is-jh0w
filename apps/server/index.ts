import { prisma } from "@repo/db";
import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
import express, { type Application } from "express";
import { env } from "./env";
import { appRouter } from "./src/router/contactForm/contactFormRoutes";

const app: Application = express();
app.use(cors());

app.use(
	"/trpc",
	trpcExpress.createExpressMiddleware({
		router: appRouter,
		createContext: () => ({ prisma }),
	}),
);

app.listen(env.PORT, () => {
	console.log(`Server is running on http://localhost:${env.PORT}`);
});

const AppRouter = appRouter;
export { AppRouter };
