import React from 'react'
import {Card} from 'react-bootstrap'
const Productos = ({products}) => {
    
  return (
    <div>
    
          {products.map(p=><p>{p.name}</p>)}
      
    </div>
  )
}

export default Productos
