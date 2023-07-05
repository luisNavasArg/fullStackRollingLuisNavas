const URL_productos = import.meta.env.VITE_ENV_URL_PRODUCTS;
const URL_usuarios = import.meta.env.VITE_ENV_URL_USERS;
import axios from 'axios';

export const methPost= async(obj)=>{
    try {
        axios.post(URL_productos,obj)
    } catch (error) {
        console.log(error);
    }

}
