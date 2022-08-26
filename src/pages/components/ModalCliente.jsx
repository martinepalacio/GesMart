import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalCliente = (props) => {
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Nuevo Cliente</Modal.Title>
    </Modal.Header>
    <form action="">
    <Modal.Body>
      <label htmlFor='nombreInput' class="form-label">Nombres</label>
      <input type="text" id='nombreInput' class="form-control" />
      <label htmlFor="apellidoInput" class="form-label">Apellidos</label>
      <input type="text" id="apellidoInput" class="form-control"/>
      <label htmlFor="cuitInput" class="form-label">CUIT</label>
      <input type="number" id="cuitInput" class="form-control"/>
      <label htmlFor="arbaInput" class="form-label">Clave ARBA</label>
      <input type="text" id="arbaInput" class="form-control"/>
      <label htmlFor="redInput" class="form-label">LINK/BANELCO</label>
      <input type="text" id="redInput" class="form-control"/>
      <label htmlFor="telefonoInput" class="form-label">Teléfono</label>
      <input type="number" id="telefonoInput" class="form-control"/>
      <label htmlFor="emailInput" class="form-label">Email</label>
      <input type="text" id="emailInput" class="form-control"/>
      <label htmlFor="honorarioInput" class="form-label">Honorarios</label>
      <input type="text" id="honorarioInput" class="form-control"/>
      <label htmlFor="m/riInput" class="form-label">Monotributo/Resp. Insc.</label>
      <input type="text" id="m/riInput" class="form-control"/>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.handleClose}>
        Close
      </Button>
      <Button type="submit" variant="primary" onClick={props.handleClose}>
        Guardar
      </Button>
    </Modal.Footer>
    </form>
  </Modal></div>
  )
}

export default ModalCliente