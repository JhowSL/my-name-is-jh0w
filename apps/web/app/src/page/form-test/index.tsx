import React from "react";
import { ContactForm, ContactList } from "../../components/contact-form";

export default function FormTest() {
	return (
		<div className="h-screen">
			<ContactForm />
			<ContactList />
		</div>
	);
}
