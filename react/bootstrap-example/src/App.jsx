import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MyCarousel from "./components/MyCarousel";
import Section from "./components/Section";


function App() {
  
  //desestructuración de array [variable, método]
  const [activo,setActivo]=useState(false);
  
  const data = [
    {id:"SuperOferta",text:"Lleva tres libros y pagas 2",
    titulo:"Aprovecha la super oferta", precio:15000},
    {id:"Fascinante",text:"Lleva dos libros y pagas 1",
    titulo:"Aprovecha la Oferta", precio:10000},
    {id:"Imperdible",text:"Lleva 5 libros y pagas 3",
    titulo:"Aprovecha la extra Oferta", precio:35000}
  ];
  
  return (
    <>
      <Nav  ids={["SuperOferta","Fascinante","Imperdible"]}></Nav>
      <MyCarousel />
      {data.map((s,i)=><Section key={`sect${i}`} activo={activo} id={s.id} text={s.text} titulo={s.titulo} precio={s.precio}/>)}
      
     <Footer></Footer>
    </>
  )
}

export default App
