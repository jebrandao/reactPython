import { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

export default function Formulario() {
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [anoLancamento, setAnoLancamento] = useState('')
  const [imagemUrl, setImagemUrl] = useState('')
  const [genero, setGenero] = useState('')

  // As chaves já seguem os nomes que a API terá (snake_case)
  const objeto = {
    nome,
    descricao,
    ano_lancamento: anoLancamento,
    url_imagem: imagemUrl,
    genero,
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(objeto) // por enquanto só mostramos o objeto no console
  }

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Form onSubmit={handleSubmit} style={{ minWidth: '350px' }}>
        <Form.Group controlId="formNomeFilme">
          <Form.Label>Nome do Filme</Form.Label>
          <Form.Control type="text" placeholder="Digite o nome do filme" value={nome} onChange={(e) => setNome(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formDescricaoFilme" className="mt-3">
          <Form.Label>Descrição</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Digite a descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formanoLancamentoFilme" className="mt-3">
          <Form.Label>Ano de Lançamento</Form.Label>
          <Form.Control type="text" maxLength={4} placeholder="Digite o ano de lançamento" value={anoLancamento} onChange={(e) => setAnoLancamento(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formUrlImagemFilme" className="mt-3">
          <Form.Label>URL da Imagem</Form.Label>
          <Form.Control type="text" placeholder="Digite a url da imagem" value={imagemUrl} onChange={(e) => setImagemUrl(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formGeneroFilme" className="mt-3">
          <Form.Label>Gênero</Form.Label>
          <Form.Select value={genero} onChange={(e) => setGenero(e.target.value)}>
            <option value="">Selecione o gênero</option>
            <option value="Ação">Ação</option>
            <option value="Ficção">Ficção</option>
            <option value="Romance">Romance</option>
            <option value="Terror">Terror</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Adicionar filme
        </Button>
      </Form>
    </Container>
  )
}
