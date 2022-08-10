import React from 'react'
import ButtonAdd from './components/buttonAdd'
import Navbar from './components/navbar'
import TablaClientes from './components/TablaClientes'



const Clientes = () => {
  
  return (
    <div>
        <Navbar/>
        <ButtonAdd title="+ Nuevo Cliente" />
        <TablaClientes/>
    </div>
  )
}

export default Clientes