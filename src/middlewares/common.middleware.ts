// COMMON MIDDLEWARE
//Giai thich filterMiddleware:
//filterMiddleware la mot middleware dung de loc cac field cua request body
//Neu field khong nam trong filterKeys thi se khong duoc them vao request body
//filterKeys la mot mang cac key cua request body
//Tuc la filterMiddleware se loc cac field cua request body dua vao filterKeys
//VD: filterMiddleware(['name', 'age'])(req, res, next)
//Neu req.body = {name: 'John', age: 20, email: 'john@gmail.com'}
//Thi req.body se la {name: 'John', age: 20}

import { NextFunction, Request, Response } from 'express'
import { pick } from 'lodash'
type FilterKey<T> = Array<keyof T>
export const filterMiddleware =
  <T>(filerKeys: FilterKey<T>) =>
  (req: Request, res: Response, next: NextFunction) => {
    req.body = pick(req.body, filerKeys)
    next()
  }
