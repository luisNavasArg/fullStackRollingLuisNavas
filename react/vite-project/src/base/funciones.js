// function saludar2(nombre) {
//     return `Hola, ${nombre}`
// }
const saludar =nombre=>`Hola, ${nombre}`;

console.log(saludar("Juan"));
// const getUser=()=>{
//     return {
//         uid:"ABC25366",
//         username:"juan123"
//     }
// }
const getUser=()=>({uid:"ABC25366",username:"juan123"})
console.log(getUser());
//tarea crear una función que capture el usuario activo
const getUserActive=(nombre)=>({uid:"ABC25366",username:nombre});
let usuarioActivo = getUserActive("Tutty");
console.log(usuarioActivo);
