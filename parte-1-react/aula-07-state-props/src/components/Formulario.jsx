import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import ModalUsuario from './ModalUsuario'

function Formulario() {
  // Cada useState guarda um valor que pode mudar. [valor, função que altera o valor]
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [showModal, setShowModal] = useState(false)

  function cadastrar(e) {
    e.preventDefault() // impede o navegador de recarregar a página ao enviar o formulário

    const usuario = { nome, email, senha }
    console.log(usuario) // no futuro, este objeto será enviado a uma API

    setShowModal(true) // altera o state: o React redesenha e o modal aparece
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <Form style={{ maxWidth: '500px' }} onSubmit={cadastrar}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Fulano da Silva"
            onChange={(evento) => setNome(evento.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="fulano@email.com"
            onChange={(evento) => setEmail(evento.target.value)}
          />
          <Form.Text className="text-muted">Nós não iremos compartilhar o seu e-mail com ninguém.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Escolha a sua senha"
            onChange={(evento) => setSenha(evento.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Cadastrar
        </Button>

        <ModalUsuario mostrar={showModal} esconder={() => setShowModal(false)} />
      </Form>
    </div>
  )
}

export default Formulario
