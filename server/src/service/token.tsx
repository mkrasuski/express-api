import { AUTH_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from '../appenv'
import { sign, verify } from 'jsonwebtoken'

export function createAuthToken(user: AuthUser): string {
    return sign(
        { user },
        AUTH_TOKEN_SECRET,
        { expiresIn: '30s' }
    )
}

export function verifyAuthToken(token: string): AuthUser {

    const data = verify(
        token,
        AUTH_TOKEN_SECRET
    )
    return data['user']
}


export function createRefreshToken(user: AuthUser): string {

    return sign(
        { user },
        REFRESH_TOKEN_SECRET,
        { expiresIn: '1d' }
    )
}

export function verifyRefreshToken(token: string): AuthUser {

    const data = verify(
        token,
        REFRESH_TOKEN_SECRET
    )
    return data['user']
}

