import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactFormSchema } from "../../../../../server/src/models/contact-form";

export function useContactForm() {
	return useForm({
		resolver: zodResolver(contactFormSchema),
	});
}
