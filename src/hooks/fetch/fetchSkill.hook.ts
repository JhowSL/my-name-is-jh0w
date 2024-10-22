'use client'
import { trpc } from '@/utils/trpc/trpc'

export function fetchSkills() {
  return {
    getAllSkills: trpc.skill.getAllSkills.useQuery(),
  }
}
