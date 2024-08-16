"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";

import { trpc } from "./src/lib/trpc";

import AllPages from "./src/components/scroll/all-pages-in-scroll";

export default function Home() {
	const [queryClient] = useState(() => new QueryClient());
	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [
				httpBatchLink({
					url: "http://localhost:3333/trpc",
				}),
			],
		}),
	);
	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				<div className="flex flex-col space-y-4">
					<main>
						<AllPages />
					</main>
				</div>
			</QueryClientProvider>
		</trpc.Provider>
	);
}
