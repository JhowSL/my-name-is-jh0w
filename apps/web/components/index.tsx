import React from "react";
import { trpc } from "../lib/trpc";
import type { FetchContactFormModel } from "../models/contact-form";
export default function Hello() {
	const req = trpc.contact.getAllContactForm.useQuery();
	if (req.isError) {
		return <>😢Error</>;
	}
	if (req.isLoading) {
		return <>👌Loading</>;
	}

	return (
		<div>
			{Array.isArray(req.data) &&
				req.data?.map((data: FetchContactFormModel) => (
					<div key={data.id} className="grid p-2">
						<div>{data.id}</div>
						<div>{data.name}</div>
						<div>{data.contactEmail}</div>
						<div>{data.message}</div>
						<div>{data.dataSent}</div>
					</div>
				))}
		</div>
	);
}
