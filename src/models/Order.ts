/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'



export type OrderDocument = Document & {
  user: mongoose.Schema.Types.ObjectId

  product: mongoose.Schema.Types.ObjectId
  price: number
  quantity: number

  orderDate: Date
  paymentType: string
  paymentStatus: string
  isOrderCompleted: boolean
}

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 0 },
  orderDate: { type: Date, default: Date.now() },
  paymentType: { type: String },
  paymentStatus: { type: String },
  isOrderCompleted: { type: Boolean, default: false },
})

export default mongoose.model<OrderDocument>('Order', orderSchema)
