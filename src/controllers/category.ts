import { Request, Response, NextFunction } from 'express'

import Category from '../models/Category'
import CategoryService from '../services/category'
import {
  NotFoundError,
  BadRequestError,
  InternalServerError,
} from '../helpers/apiError'

// POST /categories
export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, createdAt, createdBy, updatedBy } = req.body

    const category = new Category({
      name,
      createdAt,
      createdBy,
      updatedBy,
    })

    await CategoryService.create(category)
    res.json(category)
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(new InternalServerError('Internal Server Error', error))
    }
  }
}

// PUT /category/:categoryId
export const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const categoryId = req.params.categoryId
    const updatedCategory = await CategoryService.update(categoryId, update)
    res.json(updatedCategory)
  } catch (error: any) {
    next(new NotFoundError('Category not found', error))
  }
}

// DELETE /categories/:categoryId
export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await CategoryService.deleteCategory(req.params.categoryId)
    res.status(204).end()
  } catch (error: any) {
    next(new NotFoundError('Category not found', error))
  }
}

// GET /categories/:categoryId
export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await CategoryService.findById(req.params.categoryId))
  } catch (error: any) {
    next(new NotFoundError('Category not found', error))
  }
}

// GET /categories
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await CategoryService.findAll())
  } catch (error: any) {
    next(new NotFoundError('category not found', error))
  }
}
