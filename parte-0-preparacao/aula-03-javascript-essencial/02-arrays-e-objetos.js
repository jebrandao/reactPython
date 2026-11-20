// Rode com:  node 02-arrays-e-objetos.js

// Objeto: pares chave/valor (parecido com o dicionário do Python)
const usuario = { id: 1, nome: 'Maria', endereco: { cidade: 'Rio de Janeiro' } }
console.log(usuario.nome, usuario['nome'], usuario.endereco.cidade)

// Desestruturação: tira valores de dentro do objeto
const { nome, endereco } = usuario
console.log(nome, endereco.cidade)

// Spread (...): copia e altera sem mexer no original (é assim que o React atualiza dados)
const atualizado = { ...usuario, nome: 'Maria Silva' }
console.log(usuario.nome, '->', atualizado.nome)

// Array
const usuarios = [
  { id: 1, nome: 'Ana', ativo: true },
  { id: 2, nome: 'Bruno', ativo: false },
  { id: 3, nome: 'Carla', ativo: true },
]

// map: transforma cada item e devolve um NOVO array (no React vira uma lista de <li>)
const nomes = usuarios.map((u) => u.nome)
console.log(nomes)

// filter: mantém só quem passa no teste (usado para "excluir" um item da tela)
const ativos = usuarios.filter((u) => u.ativo)
console.log(ativos.length)

// find / findIndex: procura um item
console.log(usuarios.find((u) => u.id === 2))
console.log(usuarios.findIndex((u) => u.id === 3))

// push e spread para adicionar
const comNovo = [...usuarios, { id: 4, nome: 'Davi', ativo: true }]
console.log(comNovo.length, usuarios.length)
