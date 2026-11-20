import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:5000'

export async function get_filmes() {
  const response = await axios.get(`${API_URL}/filme`)
  return response.data
}

export async function add_filme(filme) {
  const response = await axios.post(`${API_URL}/filme`, filme)
  return response
}
