import { initTRPC, TRPCError } from "@trpc/server";
import * as trpcExpress from '@trpc/server/adapters/express';

export const createContext = async ({ req, res }: trpcExpress.CreateExpressContextOptions) => {
  console.log('Validate token...');
  const token = req.headers.authorization;
  return {
    token: token
  };
}

type Context = Awaited<ReturnType<typeof createContext>>

export const trpc = initTRPC.context<Context>().create();
