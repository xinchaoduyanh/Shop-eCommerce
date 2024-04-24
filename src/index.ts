import express from 'express'
import { createServer } from 'http'
import userRoutes from './routes/user.routes'
const app = express()
app.use(express.json())

// -------------------------------------------------ROUTES-----------------------------------------------------------------
app.use(userRoutes)

// -------------------------------------------------CREATE SERVER-----------------------------------------------------------------
const httpServer = createServer(app)
httpServer.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
export default app
