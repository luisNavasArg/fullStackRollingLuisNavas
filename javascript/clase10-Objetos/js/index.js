//declaración de un objetos
let persona = {
    nombre: "Dami",
    edad: 23,
    activa: true,
    saludo: function () {
        return `Hola soy ${this.nombre} tengo ${this.edad} años.`
    }
}
persona.altura = 1.58;
// alert(persona.saludo()+ "y mi altura es "+persona.altura)
// persona.edad=22;
// alert(persona["edad"])
// delete persona.edad;
console.log(persona);
const alumno = {
    nombre: "Natalia"
}
alumno.edad = 21

console.log(alumno);
//función constructora
class Curso {
    constructor(nombre, duracion, alumnos, profesores) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.alumnos = alumnos;
        this.profesores = profesores;
    }
}

let html = new Curso("html", " 3 meses", ["Natalia", "Esteban", "Pato"]);
new Curso()
let html2 = new Curso("Js", " 7 meses", ["Natalia", "Esteban", "Pato"], ["Dami", "Luis"]);
let html3 = new Curso("React", " 3 meses", ["Dami", "Luis"], ["Natalia", "Esteban", "Pato"]);
html3.tiempoExtra = "1 meses";
html.profesores = ["Tutti"];
let aux = html3.profesores
html3.profesores = html3.alumnos;
html3.alumnos = aux
console.log(html);
console.log(html2);
console.log(html3);

//Crear objeto con Object

let auto = new Object();
this.color = "Azul";
auto.puertas = 3;
auto.marca = "Fiat";
auto.anio = 2023;
console.log(auto);
console.log(this.color);



// console.log(html===html);

class Paint {
    constructor(pizarra, pinceles, tamanio, t) {
        this.pizarra = pizarra;
        this.pinceles = pinceles;
        this.tamanio = tamanio;
        this.texto = t;
    }
}

let pizarra = {
    height: "529px",
    width: "672px",
    position:"absolute",
    left: "23px",
    top: "17px",
    background: "black"
}

let pincel ={
    height: "10px",
    width: "10px",
    position:"absolute",
    left: "768px",
    top: "53px",
    background: "blue"
}

let tamanio = [5,10,15,20,25];
let text = ["Seleccioná un color","Seleccionpá el tamaño","Seleccioná el evento"];
let nuestraPaint = new Paint(pizarra,pincel,tamanio,text);


function crearElemnento(id){
    document.querySelector(".container").innerHTML+=`<div id="${id}"></div>`
}
function agregarAtributos(pepe,obj){
    let ele = document.getElementById(pepe);
    ele.style.height=obj.height;
    ele.style.width=obj.width;
    ele.style.position=obj.position;
    ele.style.left=obj.left;
    ele.style.top=obj.top;
    ele.style.backgroundColor=obj.background;
    
}

crearElemnento("pizarra")
agregarAtributos("pizarra",nuestraPaint.pizarra)
crearElemnento("pincel")
agregarAtributos("pincel",nuestraPaint.pinceles)
console.log(nuestraPaint.pinceles);
nuestraPaint.pinceles.left="792px"
nuestraPaint.pinceles.background="red"
crearElemnento("pincel")
agregarAtributos("pincel",nuestraPaint.pinceles)



