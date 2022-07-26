import React from 'react'
import ModalAdd from './Modal'

const Button = (props) => {
  return (
    <div className="d-grid gap-2 col-6 mx-auto buttonAdd">
        <button 
        data-bs-toggle="modal" 
        data-bs-target="#Modal" 
        className="btn btn-primary" 
        type="button">
          {props.title}
          </button>
        <ModalAdd/>    
    </div>
  )
}

export default Button