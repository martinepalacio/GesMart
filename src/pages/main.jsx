import React from 'react'
import Navbar from './components/navbar'
import Tiles from './components/tiles';
import ModalAdd from "./components/Modal";
import Historial from './components/Historial';

const Main = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <div>
        <Navbar/>
        <ModalAdd title="+ Nuevo Cobro"/>
        <div className='main'>
          <div className='tilebox'>
         
          <div className="App">
            <h2>Fecha {date}</h2>
          </div>
            <Tiles title="Saldo a cobrar" number="$123.456"/>
            <Tiles title="Cobrado en el mes" dateM={current.getMonth()+1} number="$36.456"/>
            <Tiles title="Total clientes activos" number="35"/>  
          </div>
          <div className='historybox'>
           <Historial className="tabla"/>
          </div>
        </div>
    </div>
  )
}

export default Main;