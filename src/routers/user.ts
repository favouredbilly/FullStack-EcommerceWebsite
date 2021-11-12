import express, { Response, Request } from 'express'
import passport from 'passport'

import {
  // findAll,
  // findUserById,
  // createUser,
  // updateUser,
  // deleteUser,
  signup,
  signin,
  // addFavOrders,
  // googleLogin,
} from '../controllers/user'

const router = express.Router()

// Every path we define here will get /api/v1/users prefix
// router.get('/', passport.authenticate('jwt', { session: false }), findAll)
// router.get(
//   '/:userId',
//   passport.authenticate('jwt', { session: false }),
//   findUserById
// )
router.post('/signup', signup)

router.post('/signin', signin)
// router.get('/:userId', findUserById)
// //router.put('/:userId', updateUserById)
// router.delete('/:userId', deleteUser)
// router.post('/', passport.authenticate('jwt', { session: false }), createUser)

// router.put(
//   '/:userId',
//   passport.authenticate('jwt', { session: false }),
//   updateUser
// )
// router.post(
//   '/login',
//   passport.authenticate('google-id-token', { session: false }),
//   googleLogin
// )

export default router
