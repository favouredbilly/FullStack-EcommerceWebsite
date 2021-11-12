import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Admin, { AdminDocument } from '../models/admin'
import { Request, Response, NextFunction } from 'express'

export const GetAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Admin.find({})
    .exec()
    .then((doc: any) => {
      res.status(201).json({
        message: doc,
      })
    })
    .catch((er: any) => {
      res.status(500).json({
        error: er,
      })
    })
}

export const AdminSignUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Admin.find({ email: req.body.email })
    .exec()
    .then((admin) => {
      if (admin.length > 0) {
        return res.status(500).json({
          message: 'Already registered, try another email address',
        })
      } else {
        bcrypt.hash(req.body.password, 10, function (err, hash) {
          // Store hash in your password DB.
          if (err) {
            return res.status(500).json({
              error: err,
            })
          } else {
            const admin = new Admin({
              _id: new mongoose.Types.ObjectId(),
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              password: hash,
              createdAt: new Date().toISOString(),
            })

            admin
              .save()
              .then((doc: any) => {
                res.status(201).json({
                  message: 'Admin Registered Successfully',
                })
              })
              .catch((er: any) => {
                res.status(500).json({
                  error: er,
                })
              })
          }
        })
      }
    })
}

export const AdminLogIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Admin.find({ email: req.body.email })
    .exec()
    .then((admin) => {
      if (admin.length <= 0) {
        return res.status(500).json({
          message: 'Something went wrong',
        })
      } else {
        // Load hash from your password DB.
        //const user = user[0];
        bcrypt.compare(
          req.body.password,
          admin[0].password,
          function (err, result) {
            console.log('err', err)
            console.log('result', result)

            if (err) {
              return res.status(500).json({
                error: 'Login Failed',
              })
            } else {
              if (result) {
                // Create token
                const payload = {
                  adminId: admin[0]._id,
                  iat: Math.floor(Date.now() / 1000) - 30,
                  exp: Math.floor(Date.now() / 1000) + 60 * 60,
                }
                jwt.sign(payload, 'secret', function (err, token) {
                  if (err) {
                    return res.status(200).json({
                      error: 'err',
                    })
                  } else {
                    res.status(200).json({
                      message: 'Login Successfully',
                      token: token,
                    })
                  }
                })
              } else {
                res.status(200).json({
                  message: 'Login Failed',
                })
              }
            }
          }
        )
      }
    })
    .catch((er: any) => {
      res.status(500).json({
        error: er,
      })
    })
}
