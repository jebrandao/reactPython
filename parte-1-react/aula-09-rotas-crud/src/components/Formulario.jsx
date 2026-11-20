import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { adicionarUsuario } from '../data/Service'

function Formulario() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function cadastrar(e) {
    e.preventDefault()
    adicionarUsuario({ nome, email, senha })
    alert('Usuário cadastrado! Veja na página "Usuários".')
    setNome('')
    setEmail('')
    setSenha('')
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <Form style={{ maxWidth: '500px' }} onSubmit={cadastrar}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Fulano da Silva" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="fulano@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Escolha a sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </div>
  )
}

export default Formulario
