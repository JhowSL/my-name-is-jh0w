import { trpc } from "../../../lib/trpc";

export function useCreateContact() {
  return trpc.contact.createContactForm.useMutation();
}

export function useGetAllContacts() {
  return trpc.contact.getAllContactForm.useQuery();
}
