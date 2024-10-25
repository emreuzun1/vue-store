import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios'

const httpClient: AxiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  timeout: 10000,
})

// REQUEST INTERCEPTOR
httpClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers['Content-Type'] = 'application/json'
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

// RESPONSE INTERCEPTOR
httpClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  error => Promise.reject(error),
)

export default httpClient
