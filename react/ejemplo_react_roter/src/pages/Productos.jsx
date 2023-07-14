import React from 'react'
import {Navigate} from 'react-router-dom'
import {Card} from 'react-bootstrap'
const Productos = ({products,isLogueado}) => {
    
  return (
    <div>
      {isLogueado?<>{products.map((p,index)=><p key={`product${index}`}>{p.name}</p>)}</>:
      <Navigate to="/"/>}
    
          
      
    </div>
  )
}

export default Productos


