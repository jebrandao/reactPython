import { useEffect, useState } from 'react'

// A mesma ideia, agora com async/await (que é o estilo usado no restante do curso).
export default function CachorroAleatorio() {
  const [imagem, setImagem] = useState('')

  useEffect(() => {
    async function buscarImagem() {
      const resposta = await fetch('https://dog.ceo/api/breeds/image/random')
      const dados = await resposta.json() // { message: "https://...jpg", status: "success" }
      setImagem(dados.message)
    }
    buscarImagem()
  }, [])

  return imagem ? <img src={imagem} alt="Cachorro aleatório" style={{ maxWidth: '320px' }} /> : <p>Carregando...</p>
}
