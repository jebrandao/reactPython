import { useEffect, useState } from 'react'
import CachorroAleatorio from './components/CachorroAleatorio'

const url = 'https://jsonplaceholder.typicode.com'

function App() {
  const [usuarios, setUsuarios] = useState([])

  // Lista de dependências vazia ([]) = executa uma única vez, depois que a página carrega.
  useEffect(() => {
    fetch(`${url}/users`)
      .then((resposta) => resposta.json()) // 1º then: converte a resposta para objeto JavaScript
      .then((dados) => setUsuarios(dados)) // 2º then: guarda no state (e a tela é redesenhada)
  }, [])

  return (
    <div className="container mt-4">
      <h1>Usuários (JSONPlaceholder)</h1>
      <ul className="list-group">
        {usuarios.map((usuario) => (
          <li key={usuario.id} className="list-group-item">
            <p className="mb-0">
              <strong>{usuario.name}</strong> — {usuario.email}
            </p>
            {/* a cidade está dentro do objeto "address" */}
            <small className="text-muted">Cidade: {usuario.address.city}</small>
          </li>
        ))}
      </ul>

      <h2 className="mt-5">Cachorro aleatório (Dog CEO)</h2>
      <CachorroAleatorio />
    </div>
  )
}

export default App
