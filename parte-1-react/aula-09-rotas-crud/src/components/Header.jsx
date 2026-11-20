import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar expand="lg" className="bg-light">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fs-2">
          Aula de React
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="fs-5">
            {/* Link troca de página sem recarregar o site inteiro */}
            <Link className="nav-link me-3" to="/">
              Cadastrar
            </Link>
            <Link className="nav-link" to="/usuarios">
              Usuários
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
