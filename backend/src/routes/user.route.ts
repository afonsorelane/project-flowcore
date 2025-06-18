
import Express from 'express'

import { authenticationToken } from '../middleware/auth.middleware.ts';
import { login, register } from '../controllers/user.controller.ts'
import { authorizeRole } from '../middleware/authorization.middlewere.ts';

export const userroute = Express.Router()
export const loginRoute = Express.Router()

loginRoute.post('/', login)
userroute.post('/',authenticationToken,authorizeRole("technical"), register)


