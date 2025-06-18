import { Request, Response } from 'express';
import { Document } from '../models/document.model.ts';

export const getAllDocuments = async (req: Request, res: Response) => {
  try {
    const documents = await Document.find().populate('user', 'name email role');
    res.status(200).json(documents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar documentos', error });
  }
};


export const updateDocumentStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; 
    const { status } = req.body;

   
    const allowedStatus = ['pendente', 'aprovado', 'rejeitado'];
    if (!allowedStatus.includes(status)) {
    res.status(400).json({ message: 'Status inválido.' });
    }

    const document = await Document.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!document) {
   res.status(404).json({ message: 'Documento não encontrado.' });
    }

    res.status(200).json({ message: 'Status atualizado com sucesso.', document });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar status do documento.', error });
  }
};