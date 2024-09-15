'use client'

import { trpc } from '../../lib/trpc'

export function GetProjects() {
  return {
    getAllProjects: trpc.project.getAllProjects.useQuery(),
  }
}
