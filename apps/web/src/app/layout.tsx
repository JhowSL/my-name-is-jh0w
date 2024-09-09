"use client";

import "@repo/ui/globals.css";
import { cn } from "@repo/ui/cn";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { type ReactElement, useState } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { trpc } from "../lib/trpc";
import { env } from "../utils/env";

export default function Layout({
  children,
}: Readonly<{ children: ReactElement }>) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${env.NEXT_PUBLIC_TRPC_URL}/trpc`,
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <html lang="en" suppressHydrationWarning>
          <body
            className={cn("bg-[#0C0C0C] overflow-x-hidden dark antialiased")}
          >
            <Header />
            <main className=" mx-auto px-2 overflow-hidden md:overflow-visible">
              {children}
            </main>
            <Footer />
          </body>
        </html>
      </QueryClientProvider>
    </trpc.Provider>
  );
}
