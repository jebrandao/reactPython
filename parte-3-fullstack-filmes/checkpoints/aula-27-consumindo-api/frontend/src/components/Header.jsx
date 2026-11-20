import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-light">
      <Container>
        <Navbar.Brand as={Link} to="/formulario" className="fs-2">
          Filmes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="fs-5">
            <Link className="nav-link me-3" to="/formulario">
              Formulário
            </Link>
            <Link className="nav-link me-3" to="/gerenciar-filmes">
              Gerenciar filmes
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
