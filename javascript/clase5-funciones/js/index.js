// console.log("esta bien linkeado el archivo");
//declaración de la variable
let alumnos=["Luis","Dami","Natalia","Tutty", "Joaquin"];

//push agrega un item al array
//pop elimina el valor de la última posición
// length nos devuelve la longitud del array
// alumnos.push("Joaquin");

// console.log(alumnos);
// alumnos.pop()
// alumnos=[...alumnos,"Julio"];
// console.log(alumnos);
// alumnos=[];
// console.log(alumnos);
// let newArray = [];

// for(let i=0; i < alumnos.length;i++){
//     if("Luis"!==alumnos[i] && "Dami"!==alumnos[i]){
//         newArray.push(alumnos[i])
//     }
// }
// let newArray=alumnos.filter(a=>a!=="Dami"&&a!=="Luis");

let numeros=[4,3,5,45,78,69,3,78];
// let numerosMenores = numeros.filter(num=>num>45);
// console.log(numerosMenores);
// numeros=numerosMenores;
// console.log(numeros);

// let pos = numeros.indexOf(78);
// console.log("posición "+pos);
// let newNumeros =[];
// for (let i = 0;i < numeros.length;i++) {
   
//     if(numeros[pos]!==numeros[i]){
//         newNumeros.push(numeros[i]) //[4,3,5,45,69,3]
//     }

// }
// console.log(newNumeros);
// numeros=newNumeros;
// console.log(numeros);

// console.log("Hola\n".repeat(10));
// let count =0;
// while (count < newNumeros.length) {
//     console.log(newNumeros[count]);
//     count++
// }

//Funciones bloque de código reutilizable, permite organizar para usarlo muchas veces
//declaro la variable 
function suma(a,b){
    return a+b;
}
//invoco o llamo la variable
console.log(suma("Hola ",'mundo'));
console.log(suma(4,14));
console.log(suma(3,91));
console.log(suma(12,54));

function borrarItem(array,valorAeliminar){
    let nuevaLista=[];
    for (let i = 0; i < array.length; i++) {
      if(valorAeliminar !==array[i]){
        nuevaLista.push(array[i]);
      }
        
    }
    return nuevaLista
}
console.log(alumnos);
//invoco a la función
console.log(borrarItem(alumnos,"Luis"));
alumnos=borrarItem(alumnos,"Luis");
console.log(borrarItem(alumnos,"Dami"));
alumnos=borrarItem(alumnos,"Dami");
alumnos=borrarItem(alumnos,"Joaquin")
console.log(alumnos);

numeros=borrarItem(numeros,78);
numeros=borrarItem(numeros,3);
numeros=borrarItem(numeros,78);
console.log(numeros);
let productos=[];
function addProducto(producto){
    productos.push(producto);
}

// while (productos.length < 5) {
//     addProducto(prompt("Agregar producto"));
// }

console.log(productos);

for (let index = 0; index < 10; index++) {
    document.writeln(`<span class="title">Hola</span>\n`)
    
}



