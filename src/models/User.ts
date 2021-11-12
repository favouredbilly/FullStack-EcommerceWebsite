// import mongoose, { Document } from 'mongoose'

// export type UserDocument = Document & {
//   name: string;
//   email: string;
//   password: string;
//   id: string;

//   // address: string
// }

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     index: true,
//     required: true,
//   },

//   email: {
//     type: String,
//     required: true,
//     index: true,
//     unique: true,
//     // match:
//     //   /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
//   },

//   password: {
//     type: String,
//     required: true,
//   },
//   id: { type: String },

//   // address: {
//   //   type: String,
//   //   default: 'lagos',
//   // },
// })

// export default mongoose.model<UserDocument>('User', userSchema)

import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
})

export default mongoose.model('User', userSchema)
