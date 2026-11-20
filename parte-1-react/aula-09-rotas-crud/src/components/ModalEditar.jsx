import { Button, Modal } from 'react-bootstrap'
import FormularioEditar from './FormularioEditar'

function ModalEditar({ mostrar, esconder, novosDados, aoConfirmar }) {
  return (
    <Modal show={mostrar} onHide={esconder}>
      <Modal.Header closeButton>
        <Modal.Title>Editando o usuário: {novosDados.nome}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* key: ao trocar de usuário, o formulário recomeça com os dados dele */}
        <FormularioEditar key={novosDados.email} novosDados={novosDados} aoConfirmar={aoConfirmar} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={esconder}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalEditar
