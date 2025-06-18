
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'


import { loginRoute, userroute } from './routes/user.route'
import { requestRoute } from './routes/request.route'
import tecRoute from './routes/tecnich.route'

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

const host = process.env.HOST || 'http://localhost'
const port = process.env.PORT || 3003


app.use('/login', loginRoute)
app.use('/register', userroute)
app.use('/request', requestRoute)
app.use('/request', requestRoute)
app.use('/users',userroute)
app.use('/request', tecRoute)
app.use('/request', tecRoute)


mongoose
  .connect(process.env.BD_URI as string)
  .then(() => console.log('BD conectado com sucesso!'))
  .catch((error) =>
    console.log('Ocorreu um erro ao contectar com a DB: ', error)
  )

app.listen(port, () => console.log(`Server running on ${host}:${port}`))
