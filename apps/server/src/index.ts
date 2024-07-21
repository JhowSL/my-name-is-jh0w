import { prisma } from "@repo/db";
import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
import express, { type Application } from "express";
import { errorResponse, successResponse } from "./middlewares";
import { appRouter } from "./routers";
import { env } from "./utils/env";

const app: Application = express();

app.use(cors());

app.use(
	"/trpc",
	trpcExpress.createExpressMiddleware({
		router: appRouter,
		createContext: () => ({ prisma }),
	}),
);

// Middleware de tratamento de erros
app.use(errorResponse);

// Middleware de sucesso
app.use(successResponse);

app.listen(env.PORT, () => {
	console.log(`Server is running on http://localhost:${env.PORT}`);
});

const AppRouter = appRouter;
export { AppRouter };
