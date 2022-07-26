import React from 'react'
import Navbar from './components/navbar'
import Tiles from './components/tiles';
import ModalAdd from "./components/Modal";
import Historial from './components/Historial';

const Main = () => {
  return (
    <div>
        <Navbar/>
        <ModalAdd title="+ Nuevo Cobro"/>
        <div className='main'>
          <div className='tilebox'>
            <Tiles title="Saldo a cobrar:" number="$123.456"/>
            <Tiles title="Cobrado en el mes:" number="$36.456"/>
            <Tiles title="Total clientes activos:" number="35"/>  
          </div>
          <div className='historybox'>
           <Historial className="tabla"/>
          </div>
        </div>
    </div>
  )
}

export default Main;