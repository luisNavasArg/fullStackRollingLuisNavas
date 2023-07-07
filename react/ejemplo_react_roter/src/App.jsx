import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register';
import MyNav from './components/MyNav';
import Footer from './components/Footer'
import Productos from './pages/Productos'
import 'bootstrap/dist/css/bootstrap.min.css';
import {methPost,methGet} from './helpers/index'
function App() {
  const [products, setProducts] = useState([]);
  const [user,setUser]=useState({});
  /*methPost({name:"Chocolate con Naranja", 
  descripction:"Barra de chocolate con Naranja",
  price:1200})*/
  useEffect(()=>{
    methGet()
    .then(data=>data.data)
    .then(response=>{
    console.log(response.length);
    if(response.length != 0){
      setProducts(response)
    }else{
      console.log("no han llegado datos");
    }
      
    })
  },[])

  return (
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path="/products" element={<Productos products={products}/>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
  )
}

export default App
