'use client'

import { trpc } from '@/utils/trpc/trpc'

export function GetProjects() {
  return {
    getAllProjects: trpc.project.getAllProjects.useQuery(),
  }
}
