import { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { excluirUsuario, listarTodos } from '../../data/Service'
import ModalEditar from '../../components/ModalEditar'

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([])
  const [usuarioParaEditar, setUsuarioParaEditar] = useState({})
  const [showModal, setShowModal] = useState(false)

  // Carrega a lista uma vez, quando a página abre
  useEffect(() => {
    setUsuarios(listarTodos())
  }, [])

  const handleEdit = (usuario) => {
    setUsuarioParaEditar(usuario)
    setShowModal(true)
  }

  const handleDelete = (email) => {
    excluirUsuario(email)
    setUsuarios(listarTodos()) // lê de novo para a tela refletir a exclusão
  }

  const depoisDeEditar = () => {
    setShowModal(false)
    setUsuarios(listarTodos())
  }

  return (
    <Container className="mt-4">
      <h1>Usuários cadastrados</h1>
      {usuarios.map((usuario) => (
        <div key={usuario.email} className="d-flex justify-content-between align-items-center border rounded p-3 mb-2">
          <ul className="list-unstyled mb-0">
            <li>
              <strong>Nome:</strong> {usuario.nome}
            </li>
            <li>
              <strong>E-mail:</strong> {usuario.email}
            </li>
          </ul>
          <div className="d-flex gap-2">
            <Button onClick={() => handleEdit(usuario)}>Editar</Button>
            <Button variant="danger" onClick={() => handleDelete(usuario.email)}>
              Excluir
            </Button>
          </div>
        </div>
      ))}
      <ModalEditar
        mostrar={showModal}
        esconder={() => setShowModal(false)}
        novosDados={usuarioParaEditar}
        aoConfirmar={depoisDeEditar}
      />
    </Container>
  )
}
