import {
  certificateRouter,
  contactRouter,
  profileRouter,
  projectRouter,
  skillRouter,
} from '../controllers'
import { router } from '../utils/server'

export const appRouter = router({
  contact: contactRouter,
  profile: profileRouter,
  skill: skillRouter,
  certificate: certificateRouter,
  project: projectRouter,
})

export type AppRouter = typeof appRouter
