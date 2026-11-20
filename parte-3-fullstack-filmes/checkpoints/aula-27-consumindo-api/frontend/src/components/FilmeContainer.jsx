import { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import '../styles/FilmeContainer.css'
import ModalEditar from './ModalEditar'
import { get_filmes } from '../api/Api'

export default function FilmeContainer() {
  const [showModal, setShowModal] = useState(false)
  const [objetoFilme, setObjetoFilme] = useState({})
  const [filmes, setFilmes] = useState([]) // antes era uma lista fixa; agora vem da API

  useEffect(() => {
    async function fetchFilmes() {
      const listaFilmes = await get_filmes()
      setFilmes(listaFilmes)
    }
    fetchFilmes()
  }, [])

  const handleEdit = (filme) => {
    console.log(`Editando o filme: ${filme.nome}`)
    setObjetoFilme(filme)
    setShowModal(true)
  }

  const handleDelete = (id) => {
    console.log(`Excluindo filme com ID: ${id}`)
  }

  return (
    <Container className="mt-5">
      <Row>
        {filmes.map((filme) => (
          <Col key={filme.id} md={3} className="mb-4">
            <Card className="card-custom">
              <Card.Img variant="top" src={filme.url_imagem} className="imgContainer" alt={filme.nome} />
              <Card.Body>
                <Card.Title>{filme.nome}</Card.Title>
                <Card.Text>{filme.descricao}</Card.Text>
                <Card.Text>
                  <strong>Lançamento:</strong> {filme.ano_lancamento}
                </Card.Text>
                <Card.Text>
                  <strong>Gênero:</strong> {filme.genero}
                </Card.Text>
                <div className="d-flex justify-content-between mt-3">
                  <Button variant="primary" onClick={() => handleEdit(filme)}>
                    Editar
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(filme.id)}>
                    Excluir
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <ModalEditar mostrar={showModal} esconder={() => setShowModal(false)} novosDados={objetoFilme} />
    </Container>
  )
}
