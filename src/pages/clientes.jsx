import React, { useState } from 'react'
import ButtonAdd from './components/buttonAdd'
import Navbar from './components/navbar'
import TablaClientes from './components/TablaClientes'



const Clientes = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <Navbar/>
        <ButtonAdd title="+ Nuevo Cliente" handleShow={handleShow} handleClose={handleClose} show={show} />
        <TablaClientes handleClose={handleClose} handleShow={handleShow} show={show} />
    </div>
  )
}

export default Clientes