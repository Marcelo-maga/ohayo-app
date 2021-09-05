import axios from 'axios'
require('dotenv')

const api = axios.create({
  baseURL: process.env.API_URL
})

export default api
