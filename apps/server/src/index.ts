import { PrismaClient } from '@prisma/client'
import * as trpcExpress from '@trpc/server/adapters/express'
import cors from 'cors'
import express, { type Application } from 'express'
import { errorResponse, successResponse } from './middlewares'
import { appRouter } from './routers'
import { envConfig } from './utils/env'

const app: Application = express()

app.use(cors())
app.use(express.json())
const prisma = new PrismaClient()
app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: () => ({ prisma }),
  })
)

app.use(errorResponse)
app.use(successResponse)

app.listen(envConfig.PORT_BACK, () => {
  console.log(`Server is running on http://localhost:${envConfig.PORT_BACK}`)
})

const AppRouter = appRouter
export { AppRouter }
