
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import { userroute } from './routes/user.route'

const app = express()
app.use(express.json())
dotenv.config()

const host = process.env.HOST || 'http://localhost'
const port = process.env.PORT || 3003


app.use('/login', userroute)
app.use('/register', userroute)
app.use('/me', userroute)

mongoose
  .connect(process.env.BD_URI as string)
  .then(() => console.log('BD conectado com sucesso!'))
  .catch((error) =>
    console.log('Ocorreu um erro ao contectar com a DB: ', error)
  )

app.listen(port, () => console.log(`Server running on ${host}:${port}`))
