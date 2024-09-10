import { NextFunction, Request, Response, Router } from 'express'

const userRoutes = Router()

/**
 * Description: Login a new user
 * Path: /register
 * Method: POST
 * Body: {email:string password: string}
 */
userRoutes.get('/user', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World!')
})

export default userRoutes
