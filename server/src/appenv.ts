
require('dotenv').config()

if (!process.env.AUTH_TOKEN_SECRET) throw Error("AUTH_TOKEN_SECRET not defined")
export const AUTH_TOKEN_SECRET = process.env.AUTH_TOKEN_SECRET || ''

if (!process.env.REFRESH_TOKEN_SECRET) throw Error("REFRESH_TOKEN_SECRET not defined")
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || ''

if (!process.env.COOKIES_SECRET) throw Error("COOKIES_SECRET not defined")
export const COOKIES_SECRET = process.env.COOKIES_SECRET || ''
