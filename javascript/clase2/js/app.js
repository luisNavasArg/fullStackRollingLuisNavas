//declarmos las variables
/*
let nombre=prompt("Ingrese su nombre");
let edad=prompt("Ingrese su edad");
let actividadF=prompt("Ingrese su actividad Favorita");
let depF=prompt("Ingrese su deporte Favorito");

console.log("Hola Soy "+nombre +" tengo "+edad+" años y me gusta realizar "+actividadF+" y practicar "+depF);
*/

//simples o primitivos
let edad = 50;
let precio=250.25;
let hayClase=false;
//datos especiales
let division="hola"/2;
console.log(division);
let apellido;
console.log(apellido);
//Operadores
/*
console.log(30 < 50);
console.log(5 + 10);
console.log(5 - 10);
console.log(5 * 10);
console.log(5 / 10);
console.log(15 % 2);
*/
// let numero = prompt('Ingrese un número');
//
// if(numero%2==1){
//  console.log(numero + " es Impar");
// }else{
//     console.log(numero + " es Par");

// }
let numeroAleatorio=Math.random()*100;
console.log(numeroAleatorio);
//para números enteros usamos Math.floor
let entero = Math.floor(numeroAleatorio);
console.log(entero);
console.log(Math.abs(-25));

const PI=3.1416;
// PI=45; 
//arrays comienzan con el índice 0
let alumnos=["Jorge","Julián","Tutty","Naty","Dami"];
let docente=["Luis",25,true];
// console.log(alumnos[4]);
// console.log(docente[1]);
//agrega en la última posición
// alumnos.push("Agustín");
// alumnos.push("Pato");
// alumnos.push("Pepito");
// alumnos[8]="Luis";
// alumnos[7]="Pedro"
// console.log(alumnos);
let docentes=[];
// docentes.push(prompt("agregá un docente"));
// docentes.push(prompt("agregá un docente"));
// docentes.push(prompt("agregá un docente"));
console.log(docentes);
console.log(alumnos);
//Remueve el último valor en la última posición
alumnos.pop();
console.log(alumnos);

let uno=[null,null,null];
let dos=[null,null,null];
let tres=[null,null,null];

tres[2]="X";
uno[0]="O";
uno[2]="X";
dos[2]="O";
tres[0]="X"
console.log(uno);
console.log(dos);
console.log(tres);

