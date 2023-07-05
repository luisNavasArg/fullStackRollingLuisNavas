import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register';
import MyNav from './components/MyNav';
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {methPost} from './helpers/index'
function App() {
  const [count, setCount] = useState(0)
  methPost({name:"Chocolate con Naranja", 
  descripction:"Barra de chocolate con Naranja",
  price:1200})
  return (
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
  )
}

export default App
