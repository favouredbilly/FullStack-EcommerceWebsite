import express from 'express'
const router = express.Router()
import { GetAdmin, AdminSignUp, AdminLogIn } from '../controllers/admin'

router.get('/', GetAdmin)

router.post('/signup', AdminSignUp)

router.post('/login', AdminLogIn)

export default router
