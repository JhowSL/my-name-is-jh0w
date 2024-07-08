import React from "react";
import { trpc } from "../lib/trpc";

export default function Hello() {
	const req = trpc.helloWorld.useQuery();
	if (req.isError) {
		return <>😢Error</>;
	}
	if (req.isLoading) {
		return <>👌Loading</>;
	}

	return <>{req.data}</>;
}
