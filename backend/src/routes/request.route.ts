
import Express from 'express'

import { createDocument} from '../controllers/document.controller.ts'
import { authenticationToken } from '../middleware/auth.middleware.ts'
import { authorizeRole } from '../middleware/authorization.middlewere.ts'
import { getAllRequest } from '../controllers/user.controller.ts'
import { upload } from '../middleware/multer';

export const requestRoute = Express.Router()


requestRoute.post(
  '/',
  authenticationToken,
  authorizeRole('customer'),
  upload.single('file'),
  (req, res, next) => {
	Promise.resolve(createDocument(req, res)).catch(next);
  }
);
requestRoute.get('/all', authenticationToken, getAllRequest)



