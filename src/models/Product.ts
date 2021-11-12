import mongoose, { Document } from 'mongoose'

export type ProductDocument = Document & {
  name: string;
  price: number;
  description: string;
  offer: number;
  productPic: string;
  category: string;
  createdAt: Date;
  slug: string;
  createdBy: mongoose.Schema.Types.ObjectId;
}

const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    index: true,
  },
  // slug: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  // stock: { type: Number, required: true },
  description: { type: String, required: true },
  offer: { type: Number, default: 0 },
  productPic: {
    type: String,
    required: true,
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    // required: true,
  },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
  slug: { type: String, required: true, unique: true }, //Use unique for name
})

export default mongoose.model<ProductDocument>('Product', productSchema)
