import { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { get_by_id, mensagemDeErro } from '../api/Api'

export default function DetalhesFilme() {
  const [filme, setFilme] = useState(null)
  const [erro, setErro] = useState('')
  const { id } = useParams() // pega o :id da URL (/filme/:id)

  useEffect(() => {
    async function fetchFilme() {
      try {
        setFilme(await get_by_id(id))
      } catch (error) {
        setErro(mensagemDeErro(error))
      }
    }
    fetchFilme()
  }, [id])

  if (erro) return <Container className="mt-5 text-danger">{erro}</Container>
  if (!filme) return <Container className="mt-5">Carregando...</Container>

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ maxWidth: '600px' }}>
        <Card.Img variant="top" src={filme.url_imagem} alt={filme.nome} />
        <Card.Body>
          <Card.Title className="fs-2">{filme.nome}</Card.Title>
          <Card.Text>{filme.descricao}</Card.Text>
          <Card.Text>
            <strong>Lançamento:</strong> {filme.ano_lancamento}
          </Card.Text>
          <Card.Text>
            <strong>Gênero:</strong> {filme.genero}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}
