'use client'

import { trpc } from '@/utils/trpc'

export function GetProjects() {
  return {
    getAllProjects: trpc.project.getAllProjects.useQuery(),
  }
}

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
