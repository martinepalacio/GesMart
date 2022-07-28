import React from 'react'
import ModalAdd from './components/Modal'
import Navbar from './components/navbar'
import TablaClientes from './components/TablaClientes'



const Clientes = () => {
  return (
    <div>
        <Navbar/>
        <ModalAdd title="+ Nuevo Cliente"/>
        <TablaClientes/>
    </div>
  )
}

export default Clientes