// let num =Number(prompt("Ingrese un número"));
// if (isNaN(num)) {
//     console.log("Debes ingresar un número");
//     num =Number(prompt("Ingrese un número"));
// }
// let num2=Number(prompt("Ingrese otro número"));
// if (isNaN(num2)) {
//     console.log("Debes ingresar un número");
//     num2 =Number(prompt("Ingrese un número"));
// }
// console.log("El resultado es:"+ (num +num2));

//Operadores = == <=
// let resultado = num+num2;
// console.log(resultado);

// let dia=prompt("qué día es hoy").toLowerCase();
// let diaDistinto="es día de la semana hay que trabajar"
// if(dia=="sábado"){
//     console.log("qué bueno es sábado");
// }else{
//     console.log(diaDistinto.toUpperCase());
// }

// let palabra = prompt("escribe una palabra mayor de tres caracteres");

// if(palabra.length > 3){
//     console.log("excelente");
// }else{
//     console.log("Es una palabra más larga la que te pido");
// }
// //hola
// console.log(palabra.charAt(3));
// console.log(palabra.indexOf("h"));
// console.log(palabra.concat(" Chao"));
// //for(variable inicializada; condición, incremento)
// for(let a=0; a < palabra.length; a++){
//     console.log(palabra[a]);
// }
// let numeros =[];
// for(let i=1; i < 4; i++){
// let num = prompt("ingresa un número"); 
// if (isNaN(num)) {
//     alert("Debes ingresar un número");
//     num =Number(prompt("Ingrese un número"));
// }else{
//     numeros.push(num);
// }
// }
// console.log(numeros);
// console.log(Math.max(numeros[0],numeros[1],numeros[2]));
let datos = ["Caracter",true,14,14.36];
for(let i=0;i < datos.length;i++){
    console.log(datos[i]);
}
//objeto literal clave:valor
let notebook = {
    pulgadas:15,
    color:"violeta",
    memoria:"8gb",
    procesador:"i7"
}

// console.log("La compu tiene de memoria "+ notebook.memoria);
// let contador=0;
// while (contador <= 3) {
//     console.log(contador);
//     contador++
// }
//entra aunque sea una vez
// do {
//     console.log('Dentro del cuerpo');
//     contador++
// } while (contador < 3);
// let count = 0;
// let numAleatorio = Math.floor(Math.random()*10);
// while (count < 3) {
//     let numero = Number(prompt("ingresa el número"));
//     if(numero === numAleatorio){
//         console.log("Ganaste");
//     }
//     count++
    
// }
let productos=1;
let carrito = [];
while (productos < 4) {
    carrito.push(prompt("Ingresa el producto"))
    productos++;
}

for(let x=0; x < carrito.length;x++){
    // console.log(x);
    console.log(carrito[x]);
}
console.log(carrito.indexOf("Yerba"));