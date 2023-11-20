import axios from 'axios'

const api = axios.create({
  baseURL: 'https://legacy.anacouto.com.br/wp-json/wp/v2',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
