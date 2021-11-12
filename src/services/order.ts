//import { findUserById } from './../controllers/user'
import Order, { OrderDocument } from '../models/Order'
import { NotFoundError } from '../helpers/apiError'

const findAllOrder = async () => {
  return Order.find()
}

const findOne = async (orderId: string) => {
  return Order.findById(orderId).populate('users')
}

const create = async (order: OrderDocument) => {
  return order.save()
}
// const addFavorite = async (productId: string, orderId: string) => {
//   const foundOrder = await Order.findById(orderId)
//   if (!foundOrder) {
//     throw new NotFoundError('Order not found')
//   }

//   ///foundOrder.owner.push(userId)
//   return foundOrder.save()
// }

export default { findAllOrder, findOne, create }
