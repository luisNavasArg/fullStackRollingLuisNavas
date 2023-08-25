const URL_productos = import.meta.env.VITE_ENV_URL_PRODUCTS;
const URL_usuarios = import.meta.env.VITE_ENV_URL_USERS;
const URL_auth = import.meta.env.VITE_ENV_AUTH;

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
    obj.admin=false;
    try {
        alert(JSON.stringify(obj))
        axios.post(URL_usuarios+"/createUser",obj)
    } catch (error) {
        console.log(error);
    }
}
export const methoGetOne=async(id)=>{
    try {
        let producto =await axios.get(`${URL_productos}/getOneProduct/${id}`)
     
        console.log(producto.data.producto)
        return producto;
    } catch (error) {
        console.log(error);
    }
}

export const  methGet=async()=>{
    try {
        let productos =axios.get(URL_productos+"/getProducts")
        return productos;
    } catch (error) {
        console.log(error);
    }
}

export const  methGetUsers=async()=>{
    try {
        let users = await axios.get(URL_usuarios+"/getUsers")
        return users;
    } catch (error) {
        console.log(error);
    }
}
export const ingresar=async(user)=>{
    let usr = await axios.post(URL_auth,user);
    return usr;
    
    
}

export const methoDeleteOne=(id)=>{
    try {
        let productos =axios.delete(`${URL_productos}/${id}`)
        return productos;
    } catch (error) {
        console.log(error);
    }
}
export const methUpdate= async(obj,id)=>{
    try {
        let editProduct = axios.put(`${URL_productos}/${id}`,obj)
        return editProduct
    } catch (error) {
        console.log(error);
    }
}
