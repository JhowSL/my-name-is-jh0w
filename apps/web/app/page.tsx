"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";
import Hello from "../components";
import DeleteContact from "../components/delete";
import FindContact from "../components/find";
import FormTest from "../components/form-test";
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
				<div className="flex flex-col space-y-4">
					<main>
						<Hello />
					</main>
					<FormTest />
					<DeleteContact />
					<FindContact />
				</div>
			</QueryClientProvider>
		</trpc.Provider>
	);
}
