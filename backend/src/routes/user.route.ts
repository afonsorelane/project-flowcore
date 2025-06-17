import Express from 'express'

import { register } from '../controllers/user.controller.ts'

import { login } from '../controllers/user.controller.ts'
import { authentionToken } from '../middleware/auth.midleware.ts'


export const userroute = Express.Router()

userroute.post('/', login)
userroute.post('/', register)
userroute.get('/', authentionToken)
