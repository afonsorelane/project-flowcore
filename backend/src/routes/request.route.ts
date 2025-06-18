
import Express from 'express'

import { createDocument, getMe } from '../controllers/document.controller.ts'
import { authenticationToken } from '../middleware/auth.middleware.ts'
import { authorizeRole } from '../middleware/authorization.middlewere.ts'
import { getAllRequest } from '../controllers/user.controller.ts'


export const requestRoute = Express.Router()


requestRoute.post('/',authenticationToken, authorizeRole("customer"), createDocument)
requestRoute.get('/me',authenticationToken,getMe)
requestRoute.get('/all', authenticationToken, getAllRequest)

