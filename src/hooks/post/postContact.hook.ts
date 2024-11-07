'use client'

import { trpc } from '@/utils/trpc/trpc'

export function PostContact() {
  const {
    mutate: postContact,
    error,
    status,
  } = trpc.contact.createContactForm.useMutation()

  const isLoading = status === 'pending'

  return {
    postContact,
    isLoading,
    error,
  }
}
