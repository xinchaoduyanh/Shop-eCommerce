import express from 'express'
import { createServer } from 'http'
import userRoutes from './routes/user.routes'
import databaseService from './services/database.services'
import { envConfig } from './constants/config'
const app = express()
app.use(express.json())

// -------------------------------------------------ROUTES-----------------------------------------------------------------
app.use(userRoutes)

// -------------------------------------------------CREATE SERVER-----------------------------------------------------------------
const httpServer = createServer(app)
// ------------------------------------------------CONNECT TO DB AND START SERVER-------------------------------------------------
databaseService.connect().then(() => {})

httpServer.listen(envConfig.PORT, () => {
  console.log(`Server is running on http://localhost:${envConfig.PORT}`)
})
export default app
