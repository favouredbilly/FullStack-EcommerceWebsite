import { Request, Response, NextFunction } from 'express'

import { InternalServerError, BadRequestError } from '../helpers/apiError'
import Order from '../models/Order'
import OrderService from '../services/order'
//import { UserDocument } from 'src/models/User'

export const findAll = async (req: Request, res: Response) => {
  const allOrder = await OrderService.findAllOrder()
  res.json(allOrder)
}

export const findOrderById = async (req: Request, res: Response) => {
  const orderId = req.params['orderId']
  const order = await OrderService.findOne(orderId)
  res.json(order)
}

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = new Order({
      ...req.body,
    })

    const createdOrder = await OrderService.create(order)
    res.json(createdOrder)
  } catch (e: any) {
    if (e.name === 'ValidationError') {
      next(new BadRequestError('Invalid Request', e))
    } else {
      next(new InternalServerError('Internal Server Error', e))
    }
  }
}
