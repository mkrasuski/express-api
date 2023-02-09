declare module "express-api"

interface AuthUser {
    username?: string
}

declare namespace Express {

    export interface Request {
        authentcated?: boolean,
        user?: AuthUser
    }
}