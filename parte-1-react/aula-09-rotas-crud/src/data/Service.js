// "Banco de dados" em memória, com as 4 operações de um CRUD.
// Ao recarregar a página (F5) tudo volta ao início: ainda não há servidor nem banco de verdade.
const usuarios = [
  { nome: 'Nivaldo', email: 'nivaldo@email.com', senha: '123' },
  { nome: 'Maria', email: 'maria@email.com', senha: '321' },
  { nome: 'João', email: 'joao@email.com', senha: '999' },
]

// READ
export function listarTodos() {
  return [...usuarios] // devolve uma cópia, para o React perceber que a lista mudou
}

// CREATE
export function adicionarUsuario(usuario) {
  usuarios.push(usuario)
}

// UPDATE
export function editarUsuario(emailUsuario, novosDados) {
  const index = usuarios.findIndex((user) => user.email === emailUsuario)
  if (index === -1) {
    alert('Usuário não encontrado')
    return
  }
  usuarios[index] = { ...usuarios[index], ...novosDados }
  alert('Usuário editado com sucesso!')
}

// DELETE
export function excluirUsuario(emailUsuario) {
  const index = usuarios.findIndex((user) => user.email === emailUsuario)
  if (index === -1) {
    alert('Usuário não encontrado')
    return
  }
  usuarios.splice(index, 1)
  alert('Usuário excluído com sucesso!')
}
