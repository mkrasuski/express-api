
import axios from "axios"

var authToken: string = ''

export const setAuthToken = (t: string) => authToken = t
export const getAuthToken = () => authToken

const RETRY = Symbol()

export const api = axios.create({
    baseURL: 'http://localhost:3030',
    withCredentials: true
})

api.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${authToken}`
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

api.interceptors.response.use(
    response => response,
    async (error) => {

        const status = error.response?.status
        const config = error.config

        if (status == 403 && !config[RETRY]) {

            await refreshToken()
            config[RETRY] = true
            config.headers.Authorization = `Bearer ${authToken}`
            return api.request(config)
        }
        return Promise.resolve(error)
    }
)

async function refreshToken() {
    api.get('/auth/refresh').then(res => authToken = res.data.authToken)
}


