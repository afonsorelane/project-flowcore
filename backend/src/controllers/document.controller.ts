import { Request, Response } from 'express'
import { DocumentProps } from './../types/document';
import { Document } from '../models/document.model.ts'


export const createDocument = async (req: Request, res: Response) => {
  try {
    const body: DocumentProps = req.body
    const { user, clientId, fileUrl } = body

    const document = await Document.create({
      user,
      clientId,
      fileUrl,
    })

    res.status(201).json({ message: 'Document created successfully', document })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'An internal server error has occurred', error })
  }
}
