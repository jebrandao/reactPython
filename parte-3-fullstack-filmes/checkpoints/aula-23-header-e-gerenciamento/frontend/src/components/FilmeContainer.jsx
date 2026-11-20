import { Card, Col, Container, Row } from 'react-bootstrap'
import '../styles/FilmeContainer.css'

export default function FilmeContainer() {
  // Lista de mentira, só para treinar o layout. Os nomes dos campos já são os da API.
  const filmes = [
    {
      id: 1,
      nome: 'Filme Exemplo',
      descricao: 'Descrição do filme exemplo.',
      ano_lancamento: '2023',
      url_imagem: 'https://placehold.co/300x430?text=Filme+1',
      genero: 'Ficção',
    },
    {
      id: 2,
      nome: 'Outro Filme',
      descricao: 'Outra descrição de exemplo.',
      ano_lancamento: '2019',
      url_imagem: 'https://placehold.co/300x430?text=Filme+2',
      genero: 'Ação',
    },
  ]

  return (
    <Container className="mt-5">
      <Row>
        {filmes.map((filme) => (
          <Col key={filme.id} md={3} className="mb-4">
            <Card>
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
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
