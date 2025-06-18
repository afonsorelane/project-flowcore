import { NextFunction,Request, Response} from 'express'
import bcrypt from 'bcrypt'
import { UserProps } from '../types/user.ts'
import { User } from '../models/user.model.ts'
import { Document } from '../models/document.model.ts'
import jwt from 'jsonwebtoken'
import { gerarSenhaAleatoria } from '../utils/utils.ts'
import { sendEmail } from './sendEmail.controller.ts'


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
          message: 'ja existe um usuario com esse email.',
        })
    }


    const user = await User.create({
      email,
      name,
      password: password,
      role: role || 'customer',
    })

     try {
      await sendEmail(email, aleatoria);
    } catch (emailError) {
      console.error('Erro ao enviar e-mail:', emailError);
    }

    res.status(201).json({ message: 'Usuario criado com sucesso', user })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: 'Ocorreu um erro interno', error })
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
    return res.status(401).json({ message: 'não autorizado' })
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


export async function getAllRequest(req: Request, res: Response) {
  try {
    const user = (req as any).user;

    const request = await Document.find({ user: user.id })
    if (!request || request.length === 0) {
     res.status(404).json({ message: "Nenhum pedido Feito." });
    }
    res.status(200).json(request);
  } catch (err) {
    console.error("Erro ao buscar pedidos do usuário:", err);
    res.status(500).json({ error: "Erro ao buscar seus pedidos." });
  }
}

