import {useParams} from 'react-router-dom'
import {Card, ListGroup, Container} from 'react-bootstrap'
import {methoGetOne} from '../helpers/index'
import { useEffect, useState } from 'react'

const ProductoDetail = ({isLogueado}) => {
    let {id} = useParams();
    const [getOne,setGetOne]=useState([])
    useEffect(() => {
        methoGetOne(id)
        .then((response)=>response.data)
        .then(data=>setGetOne([data]))
    }, [])
    
  return (
    <Container>

    <Card className='m-3 mx-auto'>
      <Card.Title>
        Producto
      </Card.Title>
      <Card.Body>
        <ListGroup >
        {getOne.map((p,index)=><ListGroup.Item className='d-flex justify-content-around' key={`product${index}`}>
          <Card.Img style={{width:"100px"}} src={p.src} />        
          <Card.Title>{p.name}</Card.Title>
          <Card.Text>{p.descripction}</Card.Text>
          <Card.Text>$ {p.price}</Card.Text>
          <Card.Link href='#'>Añadir la compra</Card.Link>
          <Card.Link href={`/products`}>Volver</Card.Link>
          </ListGroup.Item>)}
        </ListGroup>
      </Card.Body>

    </Card>

    
  </Container>
  )
}

export default ProductoDetail