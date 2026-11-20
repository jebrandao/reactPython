import { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { add_filme } from '../api/Api'

// btnName: texto do botão. infosEditar: filme que está sendo editado (a edição de verdade vem na aula 28).
export default function Formulario({ btnName, infosEditar }) {
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [anoLancamento, setAnoLancamento] = useState('')
  const [imagemUrl, setImagemUrl] = useState('')
  const [genero, setGenero] = useState('')

  const objeto = {
    nome,
    descricao,
    ano_lancamento: anoLancamento,
    url_imagem: imagemUrl,
    genero,
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await add_filme(objeto)
    if (response.status === 201) {
      alert('Filme adicionado com sucesso!')
    }
  }

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Form onSubmit={handleSubmit} style={{ minWidth: '350px' }}>
        <Form.Group controlId="formNomeFilme">
          <Form.Label>Nome do Filme</Form.Label>
          <Form.Control
            type="text"
            placeholder={infosEditar ? infosEditar.nome : 'Digite o nome do filme'}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formDescricaoFilme" className="mt-3">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder={infosEditar ? infosEditar.descricao : 'Digite a descrição'}
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formanoLancamentoFilme" className="mt-3">
          <Form.Label>Ano de Lançamento</Form.Label>
          <Form.Control
            type="text"
            maxLength={4}
            placeholder={infosEditar ? infosEditar.ano_lancamento : 'Digite o ano de lançamento'}
            value={anoLancamento}
            onChange={(e) => setAnoLancamento(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formUrlImagemFilme" className="mt-3">
          <Form.Label>URL da Imagem</Form.Label>
          <Form.Control
            type="text"
            placeholder={infosEditar ? infosEditar.url_imagem : 'Digite a url da imagem'}
            value={imagemUrl}
            onChange={(e) => setImagemUrl(e.target.value)}
          />
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
          {btnName}
        </Button>
      </Form>
    </Container>
  )
}
