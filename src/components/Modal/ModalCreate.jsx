import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalCreate(props) {
   return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">{props.h1}</Modal.Title>
         </Modal.Header>
         <Modal.Body>{props.children}</Modal.Body>
         <Modal.Footer>
            <Button onClick={props.onHide} variant="outline-dark">
               Fechar
            </Button>
         </Modal.Footer>
      </Modal>
   );
}

export default ModalCreate;
