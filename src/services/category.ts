import { NotFoundError } from '../helpers/apiError'
import Category, { CategoryDocument } from '../models/Category'

function create(category: CategoryDocument): Promise<CategoryDocument> {
  return category.save()
}

const findOne = async (categoryId: string) => {
  return Category.findById(categoryId).populate('products')
}

function findById(categoryId: string): Promise<CategoryDocument> {
  return Category.findById(categoryId)
    .exec() // .exec() will return a true Promise
    .then((category) => {
      if (!category) {
        throw new Error(`Category ${categoryId} not found`)
      }
      return category
    })
}

function findAll(): Promise<CategoryDocument[]> {
  return Category.find().sort({ name: 1, price: -1 }).exec() // Return a Promise
}

function update(
  categoryId: string,
  update: Partial<CategoryDocument>
): Promise<CategoryDocument | null> {
  return Category.findByIdAndUpdate(categoryId, update, { new: true }).exec()
}

function deleteCategory(categoryId: string): Promise<CategoryDocument | null> {
  return Category.findByIdAndDelete(categoryId).exec()
}

// const addFavorite = async (productId: string, categoryId: string) => {
//   const foundCategory = await Category.findById(categoryId)
//   if (!foundCategory) {
//     throw new NotFoundError('Category not found')
//   }
//   foundCategory.products.push(productId)
//   return foundCategory.save()
// }

export default {
  create,
  findById,
  findAll,
  update,
  deleteCategory,
  // addFavorite,
  findOne,
}
