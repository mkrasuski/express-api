import { FunctionComponent, useState } from "react";
import { api, getAuthToken, setAuthToken } from "../service/api";

export const TestPage: FunctionComponent = () => {

    const [token, setToken] = useState('')

    const set = (v: string) => {
        setAuthToken(v)
        setToken(v.substr(-20))
    }

    const login = () => api.post('/auth/login', { username:'mkr',  password:'xxx' }).then(r => set(r.data.authToken))
    const refresh = () => api.get('/auth/refresh').then(r => set(r.data.authToken))
    const test = () => api.get('/protected').then(r => console.log(r.data))

    return (
        <>
            <p>Token: {token}</p>
            <div>
                <button onClick={login}>login</button>
                <button onClick={refresh}>refresh</button>
                <button onClick={test}>test</button>
            </div>
        </>
    )
}