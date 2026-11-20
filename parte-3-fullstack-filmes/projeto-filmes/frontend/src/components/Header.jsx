import { useState } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function handleSearch(e) {
    e.preventDefault()
    // A pesquisa vai na URL (?query=...). Quem exibe os resultados é a página /filmes-filtrados.
    navigate(`/filmes-filtrados?query=${encodeURIComponent(query)}`)
  }

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
          <Form className="d-flex gap-2" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Buscar filmes"
              className="mr-2"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button variant="outline-success" type="submit">
              Buscar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
