import { NextFunction,Request, Response} from 'express'
import bcrypt from 'bcrypt'
import { UserProps } from '../types/user.ts'
import { User } from '../models/user.model.ts'
import { Document } from '../models/document.model.ts'
import jwt from 'jsonwebtoken'
import { gerarSenhaAleatoria } from '../utils/utils.ts'


export const register = async (req: Request, res: Response) => {

  try {
    const body: UserProps = req.body
    const { name, email ,role} = body


const aleatoria = gerarSenhaAleatoria();
const password = await bcrypt.hash(aleatoria, 10);

console.log('Senha gerada aleatoriamente:', aleatoria);

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      res
        .status(400)
        .json({
          message: 'There is already a user registered with this email.',
        })
    }


    const user = await User.create({
      email,
      name,
      password: password,
      role: role || 'customer',
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
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    jwtSecret,
    {
      expiresIn: '7d',
    }
  )
  res.status(200).json({ message: 'Ok', user, token })
}


export async function getMyRequest(req: Request, res: Response) {
  try {
    const user = (req as any).user;

    const request = await Document.find({ user: user._id })
    if (!request || request.length === 0) {
     res.status(404).json({ message: "Nenhum pedido Feito." });
    }

    res.status(200).json(request);
  } catch (err) {
    console.error("Erro ao buscar pedidos do usuário:", err);
    res.status(500).json({ error: "Erro ao buscar seus pedidos." });
  }
}

