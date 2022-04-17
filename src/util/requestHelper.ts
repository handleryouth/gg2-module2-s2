import axios, { AxiosRequestConfig } from 'axios'
import { store } from 'library'
import { BASE_URL } from './spotify'

const requestHelper = axios.create({
  baseURL: BASE_URL
})

const handleRequestOnFulfilled = (request: AxiosRequestConfig) => {
  const token = store.getState().token

  if (token) {
    request.headers!.Authorization = `Bearer ${token}`
  }

  return request
}

requestHelper.interceptors.request.use(handleRequestOnFulfilled)

export default requestHelper
