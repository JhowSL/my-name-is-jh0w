'use client'

import { trpc } from '@/utils/trpc/trpc'

export function fetchProjects() {
  return {
    getAllProjects: trpc.project.getAllProjects.useQuery(),
  }
}
