import { publicProcedure, router } from "./trpc";
import express, { Application } from "express";
import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";
import { createContext } from "./context";

const appRouter = router({
  helloWorld: publicProcedure.query(async () => {
    return "Hello World! 🌎";
  }),
});

export type AppRouter = typeof appRouter;

const app: Application = express();
app.use(cors());


app.use("/trpc", trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext: createContext
}));


const PORT: number = Number(process.env.PORT) || 3333;
app.listen(PORT, () => {
  console.log(`🚀 Server running on Port ${PORT} 🚀`);
});
