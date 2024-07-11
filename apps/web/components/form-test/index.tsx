import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";
import {
	type ContactFormModel,
	contactFormSchema,
} from "../../../server/src/models/contactForm";
import { trpc } from "../../lib/trpc";
export default function FormTest() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<ContactFormModel>({
		resolver: zodResolver(contactFormSchema),
	});
	const createContactMutation = trpc.createContactForm.useMutation();
	const req = trpc.getAllContactForm.useQuery();

	function handlePostContact(data: ContactFormModel) {
		createContactMutation.mutate(data);
		req.refetch();
	}

	return (
		<div>
			<form
				onSubmit={handleSubmit((handlePostContact) => {
					createContactMutation.mutate(handlePostContact);
				})}
			>
				<div className="grid">
					<input
						className="mr-2 w-1/2 border border-gray-300 p-2 bg-slate-50"
						{...register("name")}
						placeholder="Name"
					/>

					<input
						className="mr-2 w-1/2 border border-gray-300 p-2 bg-slate-50"
						{...register("contactEmail")}
						placeholder="E-mail"
					/>
					<input
						className="mr-2 w-1/2 border border-gray-300 p-2 bg-slate-50"
						{...register("message")}
						placeholder="Message"
					/>
				</div>
				<Button
					className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
					type="submit"
					disabled={isSubmitting}
				>
					{isSubmitting ? <p>Enviando...</p> : "Enviar"}
				</Button>
			</form>
		</div>
	);
}
