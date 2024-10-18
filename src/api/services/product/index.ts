import httpClient from '@/api/axiosClient'

const ENDPOINT = 'products'

const getAllProducts = async () => {
  return httpClient.get(ENDPOINT)
}

export { getAllProducts }
