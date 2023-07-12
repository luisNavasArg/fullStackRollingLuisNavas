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
import {PrivateRoutes} from './components/PrivateRoutes'
function App() {
  const [products, setProducts] = useState([]);
  const [admin,setAdmin]=useState(false);
  const [user,setUser]=useState({});
  const [isLogueado,setIslogueado]=useState(false);
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
        <MyNav isLogueado={isLogueado} admin={admin}/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={
                <Login 
                MyUser={user} 
                setUser={setUser}
                admin={admin}
                setAdmin={setAdmin}
                setIslogueado={setIslogueado}
                />}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route element={<PrivateRoutes admin={admin}/>}>
            <Route  path="/admin" element={<h1>Admin</h1>}/>
          </Route>
          <Route  path="/products" element={<Productos products={products}/>}/>

          
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
  )
}

export default App
