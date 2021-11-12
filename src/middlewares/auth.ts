
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const secret = 'test'

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const toke: any = req.headers['authorization']
    const token = toke.split(' ')[1]

    const isCustomAuth = token.length < 500

    let decodedData: any

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, secret)

      req.userId = decodedData?.id
    } else {
      decodedData = jwt.decode(token)

      req.userId = decodedData?.sub
    }

    next()
  } catch (error) {
    console.log(error)
  }
}

export default auth
