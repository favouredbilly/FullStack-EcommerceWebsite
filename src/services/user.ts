//import { findUserById } from './../controllers/user'
import User, { UserDocument } from '../models/User'
import { NotFoundError } from '../helpers/apiError'
import { ParsedToken } from '../config/passport'

const findAllUser = async () => {
  return User.find()
}

const findOne = async (userId: string) => {
  return User.findById(userId).populate('users')
}

const create = async (user: UserDocument) => {
  return user.save()
}
// const addFavorite = async (orderId: string, userId: string) => {
//   const foundUser = await User.findById(userId)
//   if (!foundUser) {
//     throw new NotFoundError('User not found')
//   } else {
//     foundUser.orders.push(orderId)
//     return foundUser.save()
//   }
// }

function findByEmail(email: string): Promise<UserDocument | null> {
  return User.findOne({ email })
    .exec()
    .then((user: any) => {
      if (!user) {
        throw new NotFoundError(`User ${email} not found`)
      }
      return user
    })
}
const findOrCreate = async (parsedToken: ParsedToken) => {
  //find user by email
  //if no user, create new one with parsedToken data
  //if there is user, return that user
  const {
    email,
    name,
    called_name: firstname,
    surname: lastname,
  } = parsedToken.payload
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  // eslint-disable-next-line @typescript-eslint/camelcase
  const user = await User.findOne({ email }).exec()
  if (user) {
    return await user
  } else {
    const newUser = new User({
      email,
      name,
      firstname,
      lastname,
    })
    const savedUser = await newUser.save()
    return savedUser
  }
}

function update(
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument | null> {
  return User.findByIdAndUpdate(userId, update, { new: true }).exec()
}

function deleteUser(userId: string): Promise<UserDocument | null> {
  return User.findByIdAndDelete(userId).exec()
}

// const findByEmail = async (email: string) => {
//   // query for the user in the database using email
//   return {
//     name: 'Bili',
//     age: 22,
//     work: 'software',
//     email: 'biliaminu.jimoh@integrify.io',
//   }
// }
export default {
  findAllUser,
  findOne,
  create,
  findOrCreate,
  findByEmail,
  update,
  deleteUser,
  // addFavorite,
}
