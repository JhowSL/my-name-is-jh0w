import type { AppRouter } from "@repo/server";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<typeof AppRouter>();
