import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilmeContainer from '../components/FilmeContainer'
import { pesquisar_filme } from '../api/Api'

export default function FilmesFiltrados() {
  const [searchParams] = useSearchParams() // lê o que vem depois do "?" na URL
  const query = searchParams.get('query') ?? ''
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    async function buscar() {
      setFilmes(await pesquisar_filme(query))
    }
    buscar()
  }, [query])

  return <FilmeContainer filmesFiltrados={filmes} />
}
