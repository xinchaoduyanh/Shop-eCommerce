import { NextFunction, Request, Response, Router } from 'express'

const productRoutes = Router()

productRoutes.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World!')
})

export default productRoutes
