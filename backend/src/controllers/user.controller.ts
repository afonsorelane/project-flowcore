import { Request, Response} from 'express'
import bcrypt from 'bcrypt'
import { UserProps } from '../types/user.ts'
import { User } from '../models/user.model.ts'
import jwt from 'jsonwebtoken'

export const register = async (req: Request, res: Response) => {
  try {
    const body: UserProps = req.body
    const { name, email, password } = body

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      res
        .status(400)
        .json({
          message: 'There is already a user registered with this email.',
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      email,
      name,
      password: hashedPassword,
    })

    res.status(201).json({ message: 'User created successfully', user })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: 'An internal server error has occurred', error })
  }
}

export const login = async (req: Request, res: Response): Promise<any> => {
  const body: UserProps = req.body
  const { email, password } = body

  const user = await User.findOne({ email })

  if (!user) {
    return res.status(404).json({ message: 'Not found' })
  }

  const isEqual = await bcrypt.compare(password, user.password)
  if (!user || !isEqual) {
    return res.status(401).json({ message: 'not authorized' })
  }

  const jwtSecret: string = process.env.JWT_SECRET || ''
  const token = jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    jwtSecret,
    {
      expiresIn: '24h',
    }
  )
  res.status(200).json({ message: 'Ok', user, token })
}
