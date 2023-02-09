require('dotenv').config()


export const AUTH_TOKEN_SECRET = need('AUTH_TOKEN_SECRET')
export const AUTH_TOKEN_EXPIRES = need('AUTH_TOKEN_EXPIRES')

export const REFRESH_TOKEN_SECRET = need('REFRESH_TOKEN_SECRET')
export const REFRESH_TOKEN_EXPIRES = need('REFRESH_TOKEN_EXPIRES')

export const COOKIES_SECRET = need('COOKIES_SECRET')

function need(v:string): string {
    if (!process.env[v]) throw Error(`${v} is missing in environment`)
    return process.env[v] || ''
}
