import axios from 'axios'
import env from '../config/env'

const api = axios.create({
  baseURL: env.API_URL
})

const token = localStorage.getItem('token')

if (token) {
  api.defaults.headers.Authorization = `Bearer ${token}`
}

export default api
