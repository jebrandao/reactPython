import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Header() {
  return (
    <Navbar expand="lg" className="bg-light">
      <Container>
        <Navbar.Brand className="fs-2" href="#home">
          Aula de React
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="fs-5">
            <Nav.Link href="#home">Início</Nav.Link>
            <Nav.Link href="#sobre">Sobre nós</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
            <NavDropdown title="Serviços" id="basic-nav-dropdown">
              <NavDropdown.Item href="#servico-1">Serviço 1</NavDropdown.Item>
              <NavDropdown.Item href="#servico-2">Serviço 2</NavDropdown.Item>
              <NavDropdown.Item href="#servico-3">Serviço 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
