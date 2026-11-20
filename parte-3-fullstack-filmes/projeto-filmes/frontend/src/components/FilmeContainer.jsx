import { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../styles/FilmeContainer.css'
import ModalEditar from './ModalEditar'
import { delete_filme, get_filmes, mensagemDeErro } from '../api/Api'

// filmesFiltrados (opcional): quando vem preenchido, mostra só esses filmes (resultado da pesquisa).
export default function FilmeContainer({ filmesFiltrados }) {
  const [showModal, setShowModal] = useState(false)
  const [objetoFilme, setObjetoFilme] = useState({})
  const [filmes, setFilmes] = useState([])
  const [erro, setErro] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchFilmes() {
      try {
        setFilmes(await get_filmes())
      } catch (error) {
        setErro(mensagemDeErro(error))
      }
    }

    if (!filmesFiltrados) {
      fetchFilmes()
    } else {
      setFilmes(filmesFiltrados)
    }
  }, [filmesFiltrados])

  const handleEdit = (filme) => {
    setObjetoFilme(filme)
    setShowModal(true)
  }

  const handleDelete = async (id) => {
    const confirmacao = confirm('Você realmente deseja excluir esse filme?')
    if (confirmacao) {
      try {
        const response = await delete_filme(id)
        if (response.status === 204) {
          alert('Filme excluído com sucesso!')
          window.location.reload(true)
        }
      } catch (error) {
        alert(mensagemDeErro(error))
      }
    }
  }

  const handleNavigation = (id) => {
    navigate(`/filme/${id}`)
  }

  return (
    <Container className="mt-5">
      {erro && <p className="text-danger">{erro}</p>}
      {!erro && filmes.length === 0 && <p className="text-muted">Nenhum filme encontrado.</p>}
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
                  <Button variant="secondary" onClick={() => handleNavigation(filme.id)}>
                    Detalhes
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
