import httpClient from '@/api/axiosClient'
import type { LoginBody } from '@/interfaces/LoginBody.interface'

const ENDPOINT = 'auth'

const loginService = async (data: LoginBody) => {
  return httpClient.post(`${ENDPOINT}/login`, data)
}

export { loginService }