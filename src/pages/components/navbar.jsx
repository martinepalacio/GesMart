import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo'


function Navbar() {

  return (
    <div>
        <div className='logos'>
            <Logo></Logo>
            <button type="button" class="btn btn-danger">Logout</button>
        </div>
    <ul class="nav nav-tabs nav-fill">
  <li class="nav-item">
    <Link class="nav-link active" to="/main">Active</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/clientes" aria-current="page">Clientes</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/saldos">Saldos</Link>
  </li>
</ul>
</div>
  );
}

export default Navbar;