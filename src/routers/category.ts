import express from 'express'

import {
  createCategory,
  findById,
  deleteCategory,
  findAll,
  updateCategory,
  // addfavProducts,
} from '../controllers/category'

const router = express.Router()

// Every path we define here will get /api/v1/categories prefix
router.get('/', findAll)
router.get('/:categoryId', findById)
router.put('/:categoryId', updateCategory)
router.delete('/:categoryId', deleteCategory)
router.post('/', createCategory)
// router.put('/:categoryId', addfavProducts)

export default router
