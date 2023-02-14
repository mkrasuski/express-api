import axios from "axios"

const API_BASE_URL = 'http://localhost:3030'

var authToken: string = ''

export const setAuthToken = (t: string) => authToken = t
export const getAuthToken = () => authToken

const kRetry = '_retry_on_refresh_' // cannot use Symbol() - not persistant in axios

export const api = axios.create({
    baseURL: API_BASE_URL,
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

        if (status == 403 && !config[kRetry]) {
            setAuthToken(await refreshToken())
            config[kRetry] = true
            config.headers.Authorization = `Bearer ${authToken}`
            return api.request(config)
        }

        return Promise.resolve(error)
    }
)

async function refreshToken() {
    // intentionaly used axios with NO interceptors to prevent endless loop on unsuccessful refresh
    return axios.get('/auth/refresh', { 
        withCredentials: true, 
        baseURL:API_BASE_URL 
    })
        .then(res => res.data.authToken)
}
