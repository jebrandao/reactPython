import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { editarUsuario } from '../data/Service'

// novosDados: o usuário que está sendo editado. aoConfirmar: avisa a página para atualizar a lista.
function FormularioEditar({ novosDados, aoConfirmar }) {
  const [nome, setNome] = useState(novosDados.nome)
  const [email, setEmail] = useState(novosDados.email)
  const [senha, setSenha] = useState(novosDados.senha)

  function editar(e) {
    e.preventDefault()
    editarUsuario(novosDados.email, { nome, email, senha })
    aoConfirmar()
  }

  return (
    <Form onSubmit={editar}>
      <Form.Group className="mb-3" controlId="editarNome">
        <Form.Label>Novo nome</Form.Label>
        <Form.Control type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="editarEmail">
        <Form.Label>Novo e-mail</Form.Label>
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="editarSenha">
        <Form.Label>Nova senha</Form.Label>
        <Form.Control type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Confirmar
      </Button>
    </Form>
  )
}

export default FormularioEditar
