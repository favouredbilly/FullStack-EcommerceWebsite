import Product, { ProductDocument } from '../models/Product'

function create(product: ProductDocument): Promise<ProductDocument> {
  return product.save()
}

function findById(productId: string): Promise<ProductDocument> {
  return Product.findById(productId)
    .exec() // .exec() will return a true Promise
    .then((product) => {
      if (!product) {
        throw new Error(`Product ${productId} not found`)
      }
      return product
    })
}

function findAll(): Promise<ProductDocument[]> {
  return Product.find().sort({ name: 1, price: -1 }).exec() // Return a Promise
}

function update(
  productId: string,
  update: Partial<ProductDocument>
): Promise<ProductDocument | null> {
  return Product.findByIdAndUpdate(productId, update, { new: true }).exec()
}

function deleteP(productId: string): Promise<ProductDocument | null> {
  return Product.findByIdAndDelete(productId).exec()
}

export default {
  create,
  findById,
  findAll,
  update,
  deleteP,
}
