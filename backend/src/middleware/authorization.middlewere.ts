
import { NextFunction,Request, Response} from 'express'


export const authorizeRole = (role: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;

    if (!user || user.role !== role) {
        console.log("Acesso negado, somente Tecnico tem acesso");
       res.status(403).json({ mensagem: "Access Denied, Unauthorized access" });
    }

    next();
  };
};