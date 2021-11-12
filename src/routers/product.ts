import express from 'express'
const router = express.Router()
import auth from '../middlewares/auth'

import {
  findAll,
  findById,
  updateProduct,
  deleteProduct,
  createProduct,
} from '../controllers/product'

// Every path we define here will get /api/v1/products prefix
router.get('/', findAll)
router.get('/:productId', findById)
router.put('/:productId', updateProduct)
router.delete('/:productId', deleteProduct)
router.post('/', auth, createProduct)

export default router
