import { Button, Form } from 'react-bootstrap'

// Por enquanto o formulário só tem a aparência. Na próxima aula ele ganha "memória" (state).
function Formulario() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <Form style={{ maxWidth: '500px' }}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Fulano da Silva" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="fulano@email.com" />
          <Form.Text className="text-muted">Nós não iremos compartilhar o seu e-mail com ninguém.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Escolha a sua senha" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
          <Form.Label>Confirme a senha</Form.Label>
          <Form.Control type="password" placeholder="Confirme a sua senha" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </div>
  )
}

export default Formulario
