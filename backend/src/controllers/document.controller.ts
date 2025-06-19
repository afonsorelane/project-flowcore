
import { Request, Response } from 'express'
import { Document } from '../models/document.model.ts'
import { DocumentProps } from '../types/document.ts'
import { cloudinary } from '../utils/cloudinary';

export const createDocument = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user?.id;
    const file = req.file;
    const { category, note } = req.body;

    if (!userId || !file) {
      return res.status(400).json({ message: 'Dados inválidos ou arquivo ausente' });
    }

    // Upload para Cloudinary
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          resource_type: 'raw',
          folder: 'documents',
          public_id: `${Date.now()}-${file.originalname}`,
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(file.buffer);
    });

    const fileUrl = (result as any).secure_url;

    const document = await Document.create({
      user: userId,
      category,
      fileUrl,
      note,
      status: 'pendente',
      submittedAt: new Date(),
    });

    res.status(201).json({ message: 'Documento criado com sucesso', document });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno ao criar documento', error });
  }
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