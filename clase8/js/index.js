// alert()

let nombre = "Luis";
let edad = 50;
let activo = true;
let puntuacion = 5.5;

const PI=3.14;

let datos =[nombre,edad,activo,puntuacion];

console.log(datos);

let alumno ={
    nombre:"Juan",
    apellido:"Perez",
    saludar:function(){
        return "Hola "
    }
}


//métodos de string
//longitud
console.log(nombre.length);
//mostrar el caracter que está en la posición
console.log(nombre.charAt(2));
//Muestra el tipo de dato
console.log(typeof []);

console.log(nombre.substring(0,3));
console.log("12".toString());
console.log(12);

console.log(nombre.indexOf("u"));
console.log();

if (nombre.includes("i") || nombre.includes("a")|| nombre.includes("e")|| nombre.includes("o")|| nombre.includes("u") ) {
    console.log("La palabra tiene tiene vocal");
}
let frase ="Estamos. con javascript"
console.log(frase.length);
let vocales=[0,0,0,0,0];
let contador =0;
for (let i = 0; i < frase.length; i++) {
    if (frase[i].toLocaleLowerCase()==="a") {
        vocales[0]=vocales[0]+1;
        contador++
    }else if (frase[i].toLocaleLowerCase()==="e") {
        vocales[1]=vocales[1]+1;
        contador++
    }else if (frase[i].toLocaleLowerCase()==="i") {
        vocales[2]=vocales[2]+1;
        contador++
    }else if (frase[i].toLocaleLowerCase()==="o") {
        vocales[3]=vocales[3]+1;
        contador++
    }else if (frase[i].toLocaleLowerCase()==="u") {
        vocales[4]=vocales[4]+1;
        contador++
    }
    
}

// document.querySelector("body").innerHTML=`
// <h1>la cantidad de vocales es:${contador}</h1>
// `;
document.querySelector("body").innerHTML+="<h1>la cantidad de vocale s es:" +contador + "</h1><p>Hola</p> ";
let alumnosRolling=["Esteban","Natalia","Dami","Tutty"]
console.log(alumnosRolling.filter((item)=>item));
console.log(alumnosRolling.filter((item)=>item.length>4));
console.log(alumnosRolling);

let alumnoFiltrados =alumnosRolling.filter(alumno=>alumno!=="Dami");
console.log(alumnoFiltrados);
console.log(alumnosRolling);

let newArrau =[];
for (let i = 0; i < alumnosRolling.length; i++) {
    if(alumnosRolling[i]!=="Dami"){
        newArrau.push(alumnosRolling[i])
    }
    
}
console.log(newArrau);
console.log("    Luis ");
console.log("    Luis ".trim().toUpperCase());
alumnosRolling.forEach(alumno=>console.log(alumno.concat(",")));

console.log(frase.slice(1,3));
console.log(frase.split("."));



function restar(a,b) {
    return (a-b)
}
const sumar=(a,b)=>a+b;

console.log(restar(16,7));
console.log(sumar(7,8));

let container = document.querySelector(".container");

for (let i = 0; i < 10; i++) {
    container.innerHTML+=`<p class="javascript">Hola a todas y todos ${i}</p>`
}
let elementosJS = document.querySelectorAll(".javascript");

console.log(elementosJS);
elementosJS[2].innerHTML="Qué bueno";
elementosJS[1].classList.add("miclase");


