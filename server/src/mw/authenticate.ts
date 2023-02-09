import { RequestHandler } from "express";
import { verify, TokenExpiredError }from "jsonwebtoken";
import { AUTH_TOKEN_SECRET } from "../appenv";

const authenticate: RequestHandler = (req, res, next) => {

    console.log('Auth: ',req.headers.authorization)
    try {
        const token = req.headers.authorization?.split(/\s+/)[1] || ''
        const tokenData = verify(
            token, 
            AUTH_TOKEN_SECRET
        )
        req.authentcated = true
        req.user = tokenData['user']
        next()
        return
    }
    catch (err) {
        res.sendStatus(err instanceof TokenExpiredError ? 403 : 401)
    }
}

export default authenticate
