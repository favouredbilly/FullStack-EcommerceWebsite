import mongoose from 'mongoose'

export type AdminDocument = Document & {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const adminSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: {
    type: String,
    index: true,
    required: true,
  },

  lastName: {
    type: String,
    index: true,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
    match:
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: Date,
})

export default mongoose.model<AdminDocument>('Admin', adminSchema)
