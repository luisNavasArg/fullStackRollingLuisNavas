import React from 'react'

const Section = (props) => {
    
    
  return (
    <section style={{height:"350px"}} className='d-flex justify-content-center'>
        <article id={props.id} >
            <h2>{props.titulo}</h2>
            <p>{props.text}</p>
            {props.activo?
            // "true"
            <p>Por solo $ { props.precio * 0.7} activo</p>:
            // false
            <p>Por solo ${props.precio} inactivo</p>
            }
            
        </article>
    </section>
  )
}

export default Section
