import { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { add_filme, edit_filme, mensagemDeErro } from '../api/Api'

// Serve para cadastrar (sem infosEditar) e para editar (com infosEditar).
export default function Formulario({ btnName, infosEditar }) {
  const [nome, setNome] = useState(infosEditar ? infosEditar.nome : '')
  const [descricao, setDescricao] = useState(infosEditar ? infosEditar.descricao : '')
  const [anoLancamento, setAnoLancamento] = useState(infosEditar ? infosEditar.ano_lancamento : '')
  const [imagemUrl, setImagemUrl] = useState(infosEditar ? infosEditar.url_imagem : '')
  const [genero, setGenero] = useState(infosEditar ? infosEditar.genero : '')

  // As chaves do objeto seguem os nomes da API (snake_case), os states seguem o padrão do JavaScript (camelCase)
  const objeto = {
    nome,
    descricao,
    ano_lancamento: anoLancamento,
    url_imagem: imagemUrl,
    genero,
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await add_filme(objeto)
      if (response.status === 201) {
        alert('Filme adicionado com sucesso!')
        setNome('')
        setDescricao('')
        setAnoLancamento('')
        setImagemUrl('')
        setGenero('')
      }
    } catch (error) {
      alert(mensagemDeErro(error))
    }
  }

  const handleEdit = async (e) => {
    e.preventDefault()
    try {
      const response = await edit_filme(infosEditar.id, objeto)
      if (response.status === 200) {
        alert('Filme editado com sucesso!')
        window.location.reload(true)
      }
    } catch (error) {
      alert(mensagemDeErro(error))
    }
  }

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Form onSubmit={infosEditar ? handleEdit : handleSubmit} style={{ minWidth: '350px' }}>
        <Form.Group controlId="formNomeFilme">
          <Form.Label>Nome do Filme</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o nome do filme"
            name="name"
            value={nome}
            onChange={(valor) => setNome(valor.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formDescricaoFilme" className="mt-3">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Digite a descrição"
            name="description"
            value={descricao}
            onChange={(valor) => setDescricao(valor.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formanoLancamentoFilme" className="mt-3">
          <Form.Label>Ano de Lançamento</Form.Label>
          <Form.Control
            type="text"
            maxLength={4}
            placeholder="Digite o ano de lançamento"
            name="releaseYear"
            value={anoLancamento}
            onChange={(valor) => setAnoLancamento(valor.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formUrlImagemFilme" className="mt-3">
          <Form.Label>URL da Imagem</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite a url da imagem"
            name="imageUrl"
            value={imagemUrl}
            onChange={(valor) => setImagemUrl(valor.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formGeneroFilme" className="mt-3">
          <Form.Label>Gênero</Form.Label>
          <Form.Select name="genre" value={genero} onChange={(valor) => setGenero(valor.target.value)}>
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
