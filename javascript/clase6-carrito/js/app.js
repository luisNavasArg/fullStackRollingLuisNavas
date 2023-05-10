//CRUD create update read delete
//declaradas
let productos=[];
let ids = 1;
function crearProducto(prod) {
    productos.push(prod);
}
//DOM
let body = document.querySelector("body");
body.style.backgroundColor="blue";
body.innerHTML=`<p class="text-white">o<p>`;

let elementoP = document.querySelector("p");
elementoP.style.position="absolute";
let contador =0;
let color = true;
//ternario variable?true:false
let clase =color?"bg-info":"bg-danger";
setInterval(()=>{
    
    contador=contador+50;
    elementoP.style.left=contador+"px";
    elementoP.classList.add(clase);

},1000)




//expresadas
let mostrarProductos =function(){
    let elementoDiv =document.querySelector(".container");

    console.log(elementoDiv);
    elementoDiv.classList.add("bg-info");
    

    productos.forEach(function (producto) {
        elementoDiv.innerHTML+=`<h2 class="m-2 bg-danger bg-opacity-50">${producto}</h2>`;
    })
}
let borrarProductos=()=>{

    mostrarProductos();
}

let modificarProducto=(pos,newData)=>{
    productos[pos]=newData;
    mostrarProductos();
}
//Objeto literal {clave:valor,clave:valor}
//Invocamos las funciones 

crearProducto("Galletas de chocolate");
crearProducto("Yerba mate");
crearProducto("Dulce de Leche");
crearProducto("Chocolate");
crearProducto("Café");
console.log(productos);
mostrarProductos();



  








