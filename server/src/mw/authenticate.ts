import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { AUTH_TOKEN_SECRET } from "../appenv";

const authenticate: RequestHandler = (req, res, next) => {

    try {
        const token = req.headers.authorization?.split(/\s+/)[1] || ''
        const tokenData = jwt.verify(
            token, 
            AUTH_TOKEN_SECRET
        )
        req.authentcated = true
        req.user = tokenData['user']
        next()
    }
    catch (err) {
        res.sendStatus(401)
    }
}

export default authenticate
