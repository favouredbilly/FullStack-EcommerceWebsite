import passport from 'passport'
import passportLocal from 'passport-local'
import GoogleTokenStrategy from 'passport-google-id-token'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import jwt from 'jsonwebtoken'

import UserService from '../services/user'
import { JWT_SECRET } from '../util/secrets'

const LocalStrategy = passportLocal.Strategy
export type ParsedToken = {
  header: {
    alg: string;
    kid: string;
    typ: string;
  };
  payload: {
    iss: string;
    azp: string;
    aud: string;
    sub: string;
    hd: string;
    email: string;
    email_verified: string;
    at_hash: string;
    name: string;
    picture: string;
    called_name: string;
    surname: string;
    locale: string;
    iat: number;
    exp: number;
    jti: string;
  };
  signature: string;
}

export const googleStrategy = new GoogleTokenStrategy(
  {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },
  async (parsedToken: any, googleId: any, done: any) => {
    console.log('parsed token', parsedToken)
    const foundUser = await UserService.findOrCreate(parsedToken)
    const token = jwt.sign({ email: foundUser.email }, JWT_SECRET)

    done(null, { user: foundUser, token })
  }
)

export const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (payload: any, done: any) => {
    console.log('payload', payload)
    const userEmail = payload.email
    const foundUser = await UserService.findByEmail(userEmail)
    done(null, foundUser)
  }
)
