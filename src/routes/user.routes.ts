import { Router } from 'express'

const userRoutes = Router()

userRoutes.get('/user', (req, res) => {
  res.send('Hello World!')
})

export default userRoutes
