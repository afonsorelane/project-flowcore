
import { NextFunction,Request, Response} from 'express'


export const authorizeRole = (role: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;

    if (!user || user.role !== role) {
       res.status(403).json({ mensagem: "Acesso não autorizado" });
    }

    next();
  };
};