
import Express from 'express'

import { createDocument, getMe } from '../controllers/document.controller.ts'
import { authenticationToken } from '../middleware/auth.middleware.ts'


export const requestRoute = Express.Router()


requestRoute.post('/',authenticationToken, createDocument)
requestRoute.get('/',getMe)


