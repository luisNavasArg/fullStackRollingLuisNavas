import { useState } from 'react'
import MyButton from './MyButton'
const MyForm =({setList,list})=>{
    const [item,setItem]=useState();
    const agregarItem=(e)=>{
        e.preventDefault();
        setList([...list,item])
        setItem("")
        e.target[0].value=""
    }
    return(
        <form onSubmit={agregarItem}>
            <input  
            type="text" 
            name="" 
            id="" 
            placeholder="Agregá una tearea"
            onChange={(event)=>setItem(event.target.value)}
            />
            <br/>
            <MyButton text="Añadir tarea" color="blue"/>
        </form>
        
    )
}
export default MyForm