// console.log("está bien vinculado el js");
// Estructuras de control
// let gane = false;

// let uno =[null,null,null];
// let dos =[null,null,null];
// let tres =[null,null,null];
// // let grilla =[
// //     [null,null,null],
// //     [null,null,null],
// //     [null,null,null]
// // ];

// uno[0]="X";
// console.log(uno);
// console.log(dos);
// console.log(tres);
// uno[1]="X";
// console.log(uno);
// console.log(dos);
// console.log(tres);
// uno[2]="X";
// console.log(uno);
// console.log(dos);
// console.log(tres);




// if(uno[0]=="X" && uno[1]=="X" && uno[2]=="X"){
//     console.log("Ganó el jugador X");
// }
// else if(dos[0]=="X" && dos[1]=="X" && dos[2]=="X"){
//     console.log("Ganó el jugador X");
// }
// else if(tres[0]=="X" && tres[1]=="X" && tres[2]=="X"){
//     console.log("Ganó el jugador X");
// }
// else if(uno[0]=="X" && dos[0]=="X" && tres[0]=="X"){
//     console.log("Ganó el jugador X");
// }
// else if(uno[1]=="X" && dos[1]=="X" && tres[1]=="X"){
//     console.log("Ganó el jugador X");
// }
// else if(uno[2]=="X" && dos[2]=="X" && tres[2]=="X"){
//     console.log("Ganó el jugador X");
// }
// else if(uno[0]=="X" && dos[1]=="X" && tres[2]=="X"){
//     console.log("Ganó el jugador X");
// }
// else if(uno[2]=="X" && dos[1]=="X" && tres[0]=="X"){
//     console.log("Ganó el jugador X");
// }else{
//     console.log("Nadie ha ganado aún!");
// }

// //Validamos el valor y tipo de dato estrictamente iguales
// if(1==="1"){
//     console.log("son iguales");
// }else{
//     console.log("son distintos");
// }

// let clima="soleado";
// let dia="domingo";

// if(clima==="soleado" && dia==="sábado"){
//     console.log("¡Salimos a pasear!");
// }else if(clima==="soleado" && dia==="domingo"){
//     console.log("¡Vamos al Cine!");
// }
// else{
//     console.log("¡Nos quedamos en casa!");
// }

// let numAl = Math.floor(Math.random()*11)+1;

// let num = prompt("Introduce un número de 1 a 10");

// if(numAl === Number(num)){
//     console.log("¡Ganaste!");
// }
// let num2 = prompt("Introduce un número de 1 a 10");

// if(numAl === Number(num2)){
//     console.log("¡Ganaste!");
// }
// let num3 = prompt("Introduce un número de 1 a 10");

// if(numAl === Number(num3)){
//     console.log("¡Ganaste!");
// }
// console.log(numAl);

// let usuario = "alberto";
// let clave="albertito";

// let user=prompt("Ingresa tu usuario");
// let password=prompt("Ingresa tu Clave");

// if(password===clave && user===usuario){
//     console.log("Tus credenciales son correctas");
// }else{
//     console.log("Datos incorrectos");
// }
// if(user===usuario){
//     if(password===clave){
//         console.log("Tus credenciales son correctas");
//     }else{
//         console.log("Error en la contraseña");
//     }
// }else{
//     console.log("El usuario es incorrecto!");
// }

//objeto literal mouse o ratón color,cable,botones,batería,dpi,bluet

let cafetera = {
    //clave:valor
    filtro: true,
    agua: true,
    cafe: true,
    leche: true
}
// let agua=prompt("agregamos agua? \n 0 no\n 1 si");
// if(agua =="0"){
//     cafetera.agua=false;
// }else if(agua == "1"){
//     cafetera.agua=true;
// }else{
//     alert("Tiene que seleccionar un número valido");
//     cafetera.agua=false;
// }

// console.log(cafetera);
// //café sin leche
// //acceso al objeto
// //nombreObjeto.propiedad
// if(cafetera.cafe && cafetera.agua && cafetera.filtro){
//     console.log("Se está preparando un café");
// }
//palabra reservada if (condicion)
//Cuerpo{si se cumple la condicion}
//else{si no se cumple la condicion}

// if (37 % 2==0) {
//     console.log("Es par");
// }else{
//     console.log("Es impar");
// }

//palabra reservada if
//(condicion)
//cuerpo{ si es true la condicion}
//palabra reservada else
//cuerpo{se ejecuta si es false}
// let dia ="jueves";
// let horario =19;
// let esFeriado=false;
// if(dia==="martes" && horario==19 && !esFeriado || 
//    dia==="jueves" && horario==19 && !esFeriado){
//     console.log("Entramos al zoom");
// }else{
//     console.log("No tenemos clase");
// }

let dia = prompt("ingresa el día de semana");
let hora=19;
// if(dia =="lunes"){console.log("comienza la semana");}
// else if(dia =="martes"){console.log("Entramos a la clase");}
// else if(dia =="miercoles"){console.log("A mitad de semana");}
// else if(dia =="jueves"){console.log("Entramos a la clase");}
// else if(dia =="viernes"){console.log("Llegó el fin de semana");}
// else{
//     console.log("es fin de semana");
// }

switch (dia) {
    case "lunes":
        console.log("comienza la semana");
        break;
    case "martes":
        console.log("Entramos a la clase");
        break;
    case "miercoles":
        console.log("A mitad de semana");
        break;
    case "jueves":
        console.log("Entramos a la clase");
        break;

    default:
        console.log("es fin de semana");
        break;
}

