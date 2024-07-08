"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { Button } from "@ui/components/ui/button";
import { useState } from "react";
import Hello from "../components/hello";
import { trpc } from "../lib/trpc";

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
				<div>
					<main>
						<Hello />
					</main>
					<Button>Olá</Button>
				</div>
			</QueryClientProvider>
		</trpc.Provider>
	);
}
