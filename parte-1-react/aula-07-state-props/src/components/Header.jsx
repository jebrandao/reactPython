import { Container, Navbar } from 'react-bootstrap'

// "titulo" é uma PROP: um valor que o componente pai (App) passa para o filho (Header).
function Header({ titulo = 'Aula de React' }) {
  return (
    <Navbar expand="lg" className="bg-light">
      <Container>
        <Navbar.Brand className="fs-2">{titulo}</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header
