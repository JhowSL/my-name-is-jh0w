import React from "react";
import { trpc } from "../lib/trpc";

export default function Hello() {
	const req = trpc.getAllContactForm.useQuery();
	if (req.isError) {
		return <>😢Error</>;
	}
	if (req.isLoading) {
		return <>👌Loading</>;
	}

	return (
		<div>
			{req.data?.map((contactForm) => (
				<div key={contactForm.id} className="grid p-2">
					<div>{contactForm.id}</div>
					<div>{contactForm.name}</div>
					<div>{contactForm.contactEmail}</div>
					<div>{contactForm.message}</div>
					<div>{contactForm.dataSent}</div>
				</div>
			))}
		</div>
	);
}
