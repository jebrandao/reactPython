// Rode com:  node 03-async.js   (Node 18 ou superior; o último exemplo precisa de internet)

// Uma Promise representa um valor que ainda vai chegar (ex.: a resposta de um servidor).
function esperar(ms, valor) {
  return new Promise((resolve) => setTimeout(() => resolve(valor), ms))
}

// 1) Com .then()
esperar(300, 'resposta A').then((resposta) => console.log('then:', resposta))

// 2) Com async/await: o mesmo, mas lido de cima para baixo
async function principal() {
  const resposta = await esperar(600, 'resposta B') // "espera" sem travar o programa
  console.log('await:', resposta)

  // 3) Uma requisição HTTP de verdade, com tratamento de erro
  try {
    const r = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const usuario = await r.json() // converte o corpo da resposta (JSON) em objeto
    console.log('fetch:', usuario.name)
  } catch (erro) {
    console.log('Falhou (sem internet?):', erro.message)
  }
}
principal()

// Módulos (ES modules): é assim que os arquivos do React se conectam
//   export default function App() {}      -> import App from './App'
//   export function soma() {}             -> import { soma } from './utils'
