import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './custom.css'

function App() {
  return (
    <>
      {/* Menu responsivo: abaixo de 992px (breakpoint "lg") vira o botão de três linhas */}
      <Navbar expand="lg" className="bg-light">
        <Container>
          <Navbar.Brand href="#home">Aula de Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="menu-principal" />
          <Navbar.Collapse id="menu-principal" className="justify-content-end">
            <Nav>
              <Nav.Link href="#inicio">Início</Nav.Link>
              <Nav.Link href="#contato">Contato</Nav.Link>
              <NavDropdown title="Serviços" id="menu-servicos">
                <NavDropdown.Item href="#servico-1">Serviço 1</NavDropdown.Item>
                <NavDropdown.Item href="#servico-2">Serviço 2</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        {/* 1) Classes do Bootstrap pela propriedade className */}
        <h1 className="text-primary">Texto azul (text-primary)</h1>
        <p className="text-success">Texto verde (text-success)</p>
        <p className="bg-warning p-2">Fundo amarelo com espaçamento interno (bg-warning p-2)</p>

        {/* 2) Classes criadas por nós em custom.css */}
        <p className="texto-senai fundo-senai p-2">Cores personalizadas (custom.css)</p>

        {/* 3) Componentes prontos do React-Bootstrap */}
        <Form style={{ maxWidth: '420px' }}>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Digite o seu nome" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default App
