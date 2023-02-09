import { Router } from "express";
import jwt from 'jsonwebtoken'
import { AUTH_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "../appenv";
import { createAuthToken, createRefreshToken, verifyRefreshToken } from "../service/token";


export const authRouter = Router()

authRouter.post('/login', (req, res) => {

    const { username, password } = req.body

    if (username === "mkr" && password === "xxx") {

        const user = { username: "mkr" }
        try {
            const authToken = createAuthToken(user)
            const refreshToken = createRefreshToken(user)

            res.cookie('token', refreshToken, { 
                httpOnly: true, 
                secure: (process.env.NODE_ENV === 'production') 
            })

            return res.json({
                username,
                authToken,
            })
            return
        }
        catch (err) {
            console.log(err)
        }

        res.sendStatus(401)
    }

})

authRouter.get('/refresh', (req, res) => {

    try {
        const cookieToken = req.cookies['token']
        const user = verifyRefreshToken(cookieToken)
        const authToken = createAuthToken(user)

        res.json({ authToken })
        return 
    }
    catch (err) {
        console.log(err)
    }
    res.sendStatus(401)
})
