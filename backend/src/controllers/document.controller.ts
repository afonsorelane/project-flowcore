import { User } from './../models/user.model';
import { Request, Response } from 'express'
import { Document } from '../models/document.model.ts'
import { DocumentProps } from '../types/document.ts'


export const createDocument = async (req: Request, res: Response) => {
  try{
  const userId = (req as any).User;
  const body: DocumentProps= req.body;
  const { category, fileUrl, note } = body;

  if (!userId) {
    res.status(401).json({ mensagem: 'Usuário não autenticado (token ausente ou inválido)' });
    }

  const document = await Document.create({
    user: userId,
    category,
    fileUrl,
    note,
    status: 'pendente',
    submittedAt: new Date()
  });

  res.status(201).json({ message: 'document created successfully', document, userId });
}catch (error) {
    console.error(error) 
   res
      .status(500)
      .json({ message: 'An internal server error has occurred', error })
  };
};


export const getMe=(req:Request,res:Response)=> {
  try {
    res.status(200).json((req as any ).user)
    console.log((req as any).user)

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Error fetching user data" })
  }
}