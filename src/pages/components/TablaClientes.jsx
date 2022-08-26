import React from 'react'
import DropButton from './DropButton'
import { useState } from 'react'
import pruebaclientes from '../../pruebaClientes.json'
import Button from 'react-bootstrap/Button';


const TablaClientes = (props) => {
    const [search, setSearch] = useState("");

    
  return (
    <div>
        <div className="d-grid gap-2 col-6 mx-auto">
        <input className="form-control " type="text" onChange={e => { setSearch(e.target.value) }} placeholder="Buscar..." />
        </div>
            {pruebaclientes.filter(e => {
                const nombre = e.nombre.toLowerCase();
                const busqueda = search.toLowerCase();
                if (search === "") { return e;}
                else if (nombre.includes(busqueda)){
                    return e
                }
              }).map(e => {
                return(
                    <div key={e.cuit} className='tabla clientes'>
                        <div className='listaClientes'>
                            <Button className='listaItems' variant="outline-primary" onClick={props.handleShow}>
                                {e.nombre} {e.apellido}
                            </Button>
                            <div>
                            <span className='listaTitle'>Cuit</span> {e.cuit}
                            </div>
                            <div>
                            <span className='listaTitle'>Clave fiscal</span> {e.claveAfip} / {e.claveArba}
                            </div>
                        </div>
                        <DropButton handleShow={props.handleShow} handleClose={props.handleClose}/>    
                    </div>
            )}
        )}
    </div>
  )
}

export default TablaClientes