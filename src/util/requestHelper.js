import axios from 'axios'
import { store } from 'library'
import { BASE_URL } from './spotify'

export const requestHelper = axios.create({
  baseURL: BASE_URL
})

const handleRequestOnFulfilled = (request) => {
  const token = store.getState().token

  if (token) {
    request.headers.Authorization = `Bearer ${token}`
  }

  return request
}

requestHelper.interceptors.request.use(handleRequestOnFulfilled)
