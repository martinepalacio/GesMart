import React from 'react'

const Tiles = (props) => {

  return (
    <div className='tiles'>
        <p>{props.title}</p>
        <p>{props.number}</p>
    </div>
  )
}

export default Tiles