import React from 'react';
import Button from 'react-bootstrap/Button';
import ModalCliente from './ModalCliente'

const ButtonAdd = (props) => {
 
  return (
    <div className="d-grid gap-2 col-6 mx-auto buttonAdd">
      <Button variant="primary" name="Nuevo Cliente" onClick={props.handleShow}>
        + Nuevo Cliente
      </Button>
      <ModalCliente handleShow={props.handleShow} handleClose={props.handleClose} show={props.show} />
    </div>
  );
}
export default ButtonAdd