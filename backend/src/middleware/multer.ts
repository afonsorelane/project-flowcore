import multer from 'multer';
import path from 'path';

const storage = multer.memoryStorage(); 

const fileFilter = (req: any, file: any, cb: any) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (ext === '.pdf') {
    cb(null, true);
  } else {
    cb(new Error('Apenas arquivos PDF são permitidos'));
  }
};

export const upload = multer({ storage, fileFilter });