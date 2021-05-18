import axios from 'axios'

// INSTANCIA DO AXIOS
export const api = axios.create({
  // ENDEREÇO PADRÃO EM TODAS AS REQUISIÇÕES
  baseURL: 'https://www.googleapis.com/books/v1/volumes?q=title:'
})

