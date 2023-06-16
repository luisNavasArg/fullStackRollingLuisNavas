const sumar=(a,b)=>a+b;
const restar=(a,b)=>a-b;


// console.log(sumar(4,5));
// let contador=0;
// setInterval(()=>{
//     contador++;
//     console.log(contador)
// },1000)


// console.log("hola");
//estados de la promesa 
// pendiente
// aceptada
//rechazada
import {getHeroeById} from './import-export'
// const promesa = new Promise((resolve,reject)=>{
//     // setTimeout(()=>{
//         console.log("Pasaron dos segundos");
//         const heroe = getHeroeById(2);
//         console.log(heroe);
//         resolve(heroe);
//         reject("No se puede encontrarel heroe")
//     // },2000)
// })
// promesa
// .then(data=>console.log(data))
// .catch(err=>console.log(err))
const getHeroeByIdAsync=(id)=>{
    return new Promise((resolve,reject)=>{
        const heroe = getHeroeById(id);
        if(heroe){
            resolve(heroe)
        }else{
            reject("No existe el heroe")
        }
    })

}
export default getHeroeByIdAsync

//llamar desde App
getHeroeByIdAsync(1).then(data=>console.log(data)).catch(err=>console.log(err))
