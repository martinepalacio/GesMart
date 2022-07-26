import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';

function ModalAdd(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-grid gap-2 col-6 mx-auto buttonAdd">
      <Button variant="primary" onClick={handleShow}>
        {props.title}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Cobro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
          <FloatingLabel controlId="floatingSelect" label="Cliente">
            <Form.Select aria-label="Floating label select example">
              <option>Abrir para seleccionar</option>
              <option value="1">Martin Palacio</option>
              <option value="2">Ricardo Muñiz</option>
              <option value="3">Mauricio Rodriguez</option>
            </Form.Select>
          </FloatingLabel>
          <br/>
          <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control aria-label="Cantidad de pesos recibidos" />
      </InputGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalAdd; 