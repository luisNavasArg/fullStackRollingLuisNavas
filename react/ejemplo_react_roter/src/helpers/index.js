const URL_productos = import.meta.env.VITE_ENV_URL_PRODUCTS;
const URL_usuarios = import.meta.env.VITE_ENV_URL_USERS;
import axios from 'axios';
//CRUD create read update delete
//ABM altas bajas y modificaciones

export const methPost= async(obj)=>{
    try {
        axios.post(URL_productos,obj)
    } catch (error) {
        console.log(error);
    }
}

export const methPostUsers= async(obj)=>{
    try {
        axios.post(URL_usuarios,obj)
    } catch (error) {
        console.log(error);
    }
}

export const  methGet=async()=>{
    try {
        let productos =axios.get(URL_productos)
        return productos;
    } catch (error) {
        console.log(error);
    }
}
