import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './logo'


function Navbar() {

  return (
    <div>
      <div className='logos'>
        <Logo></Logo>
        <button type="button" className="btn btn-danger">Logout</button>
      </div>
      <ul className="nav nav-tabs nav-fill">
        <li className="nav-item">
          <NavLink className="nav-link" to="/main" activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/clientes" aria-current="page" activeClassName="active">Clientes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/saldos" activeClassName="active">Saldos</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;