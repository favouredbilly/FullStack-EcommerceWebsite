import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import { Request, Response, NextFunction } from 'express'

import User from '../models/User'

const secret = 'test'

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const oldUser = await User.findOne({ email })

    if (!oldUser)
      return res.status(404).json({ message: 'User does not exist' })

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password)

    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Invalid credentials' })

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: '1h',
    })

    res.status(200).json({ result: oldUser, token })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const signup = async (req: Request, res: Response) => {
  const { email, password, firstname, lastname } = req.body

  try {
    const oldUser = await User.findOne({ email })

    if (oldUser) return res.status(400).json({ message: 'User already exists' })

    const hashedPassword = await bcrypt.hash(password, 12)

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstname} ${lastname}`,
    })

    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: '1h',
    })

    res.status(201).json({ result, token })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })

    console.log(error)
  }
}