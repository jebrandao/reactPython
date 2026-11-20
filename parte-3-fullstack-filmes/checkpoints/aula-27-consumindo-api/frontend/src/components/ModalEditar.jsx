import { Button, Modal } from 'react-bootstrap'
import Formulario from './Formulario'

export default function ModalEditar({ mostrar, esconder, novosDados }) {
  return (
    <Modal show={mostrar} onHide={esconder}>
      <Modal.Header closeButton>
        <Modal.Title>Editando o filme: {novosDados.nome}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formulario btnName={'Editar filme'} infosEditar={novosDados} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={esconder}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  )
}
