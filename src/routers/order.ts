import express from 'express'

import {
  findAll, //getAllOrders
  findOrderById, //getOrderById
  createOrder, //addOrder
  // updateOrder,
  // deleteOrder,
  // getUserOrders,
} from '../controllers/order'

const router = express.Router()

// Every path we define here will get /api/v1/orders prefix
router.get('/', findAll)
router.get('/:orderId', findOrderById)
//router.put('/:userId', updateUserById)
//router.delete('/:userId', deleteUser)
router.post('/', createOrder)
// router.put('/:orderId', addFavOrders)

export default router
