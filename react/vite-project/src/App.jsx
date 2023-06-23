import { useState } from 'react'
import './App.css'
import Home from './components/Home'


function App() { 
  const [list,setList]=useState([]);
  return (
    <>
     <Home list={list} setList={setList}/>
    </>
  )
}

export default App
