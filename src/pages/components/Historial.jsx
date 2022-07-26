import React from 'react'
import pruebaclientes from "../../pruebaClientes.json"

const Historial = () => {
  return (<div className='tablabox'>
    {pruebaclientes.map(e => (
        <div className='tabla'>
            <div className='tablaCliente'>
                <div className='tablaClienteCuit'>
                    {e.cuit}
                </div>
                <div className='tablaClienteNombre'>
                    {e.nombre + " " + e.apellido}
                </div>
            </div>
            <div className='tablaDatos'>
                <div>${e.honorarios}</div>
                <div>{e.altaDate}</div>
            </div>

        </div>
    ))}
  </div>
  )
}

export default Historial;