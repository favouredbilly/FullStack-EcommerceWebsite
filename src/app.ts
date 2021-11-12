//import { jwtStrategy } from 'passport-jwt';
//import { googleStrategy } from './config/passport'
import express from 'express'
import lusca from 'lusca'
import dotenv from 'dotenv'
import compression from 'compression'
import passport from 'passport'
import cors from 'cors'
import adminRouter from './routers/admins'
import movieRouter from './routers/movie'
import userRouter from './routers/user'
import productRouter from './routers/product'
import orderRouter from './routers/order'
import categoryRouter from './routers/category'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import { googleStrategy, jwtStrategy } from './config/passport'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)
app.use(cors())
app.use(apiContentType)
// Use common 3rd-party middlewares
app.use(compression())
app.use(express.json())
app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))
app.use(passport.initialize())

//passport strategies
passport.use(googleStrategy)
passport.use(jwtStrategy)
// Use movie router. All routers are here
app.use('/api/v1/admins', adminRouter)
app.use('/api/v1/movies', movieRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/orders', orderRouter)
app.use('/api/v1/categories', categoryRouter)
// Custom API error handler
app.use(apiErrorHandler)

export default app
