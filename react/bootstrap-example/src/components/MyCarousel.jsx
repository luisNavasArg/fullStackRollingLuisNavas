import Carousel from 'react-bootstrap/Carousel';
import Spin from './Spinner'
import {books} from "../fecth";
import { useState , useEffect} from 'react';
function MyCarousel() {
  const [hayData,setHayData]=useState(false);
  const [libros,setLibros]=useState([]);
 
  useEffect(()=>{
    books.then(data=>{
      
      setLibros(data)
      setHayData(true)
    }).catch(err=>console.log(err))
  },[]);

  return (
    <>
    {hayData? <Carousel data-bs-theme="dark">
      {libros.map((libro,index)=>{
       
        return(
          <Carousel.Item key={`item${index}`}>
          <img
            className="d-block w-25"
            src="https://images.ctfassets.net/usf1vwtuqyxm/24YWmI4UcyoMwj7wdKrEcL/374de1941927db12bd844fb197eab11f/English_Harry_Potter_3_Epub_9781781100233.jpg?w=914&q=70&fm=jpg" 
            alt="First slide"
          />
          <Carousel.Caption >
            <div className='position'>
            <h5>{libro.libro}</h5>
            <p>{libro.descripcion}</p>
            <p>Lanzamiento: {libro.fecha_de_lanzamiento}</p>
            <p>{libro.autora}</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        )
      })}
    
    
    </Carousel>:<Spin/>}
   
    </>
  );
}

export default MyCarousel;