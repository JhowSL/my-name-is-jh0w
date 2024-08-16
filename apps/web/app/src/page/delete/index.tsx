import { Button } from "@repo/ui/components/ui/button";
import { useState } from "react";
import { trpc } from "../../lib/trpc";

export default function DeleteContact() {
	const deleteContactMutation = trpc.contact.deleteContactForm.useMutation();
	const req = trpc.contact.getAllContactForm.useQuery();
	const [formIdToDelete, setFormIdToDelete] = useState("");

	const handleDeleteUser = async () => {
		try {
			await deleteContactMutation.mutateAsync({
				id: formIdToDelete,
			});
			setFormIdToDelete("");
			req.refetch();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="mb-8 h-screen">
			<h2 className="mb-4 text-2xl font-bold">Delete Form</h2>
			<input
				placeholder="Enter Form id to delete"
				className="mr-2 w-1/2 border border-gray-300 p-2 bg-slate-50 "
				value={formIdToDelete}
				onChange={(e) => setFormIdToDelete(e.target.value)}
			/>
			<Button
				className="mt-2 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
				onClick={handleDeleteUser}
			>
				Delete Form
			</Button>
		</div>
	);
}
