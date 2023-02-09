
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

import authenticate from './mw/authenticate'
import logging from './mw/logging'

import { COOKIES_SECRET } from './appenv'
import { authRouter } from './routes/auth'

dotenv.config()

const app = express()

app.use(logging)
app.use(cors({ 
    credentials: true, 
    origin: 'http://localhost:5173' 
}))

app.use(cookieParser(COOKIES_SECRET))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/auth', authRouter)

app.use(authenticate)

app.get('/protected', (req, res) => {
    res.json({ result: "OK" })
})

const port = process.env.PORT || 3030
app.listen(port, () => console.log(`Started on port ${port}`))