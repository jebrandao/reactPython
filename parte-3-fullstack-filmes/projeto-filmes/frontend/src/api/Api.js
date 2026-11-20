import axios from 'axios'

// Endereço da API. Pode ser trocado criando o arquivo .env (veja .env.example).
const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:5000'

export async function get_filmes() {
  const response = await axios.get(`${API_URL}/filme`)
  return response.data
}

export async function get_by_id(id) {
  const response = await axios.get(`${API_URL}/filme/${id}`)
  return response.data
}

export async function add_filme(filme) {
  const response = await axios.post(`${API_URL}/filme`, filme)
  return response
}

export async function edit_filme(id, novosDados) {
  const response = await axios.put(`${API_URL}/filme/${id}`, novosDados)
  return response
}

export async function delete_filme(id) {
  const response = await axios.delete(`${API_URL}/filme/${id}`)
  return response
}

export async function pesquisar_filme(query) {
  const response = await axios.get(`${API_URL}/search`, { params: { query } })
  return response.data
}

// A API devolve { "error": "..." } quando algo dá errado; esta função extrai a mensagem.
export function mensagemDeErro(error) {
  return error.response?.data?.error ?? 'Não foi possível falar com o servidor. Ele está rodando?'
}
