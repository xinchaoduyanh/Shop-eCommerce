import { NextFunction, Request, Response, Router } from 'express'

const userRoutes = Router()

userRoutes.get('/user', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World!')
})

export default userRoutes
