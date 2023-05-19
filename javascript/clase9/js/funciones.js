Swal.fire(
    {
        title: 'Ingresá el número de mesas',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        html: `<h2>Soy un elemento</h2>`

    }
)
function ocuparMesa(id) {
    let miId = id.toString();
    document.getElementById(`ocupar${id}`).style.display = "none"
    document.getElementById(`pedido${id}`).style.display = "inline"
    document.getElementById(miId).classList.add("rojo");
}
document.querySelector(".swal2-confirm").addEventListener('click', function () {
    let input = document.querySelector('.swal2-input').value;
    let container = document.querySelector("#container");
    for (let i = 1; i <= input; i++) {
        container.innerHTML += `
        <div class="mesa" id="${i}">
        <div class="center">
                <p>Mesa N° ${i}</p>
            </div>
            <div class="center">
                <button type="button" class="btn" id="ocupar${i}" onclick="ocuparMesa(${i})">Ocupar</button>
            </div>
            <div class="end">
                <button type="button" class="btn oculto" id="pedido${i}" onclick="pedido(${i})">Pedido</button>
            </div>
        </div>
        `

    }
});


// nombre = {clave:valor}
//   let mueble = {
//     tamanio:10,
//     color:"Caoba",
//     precio:20000,
//     cantPatas:4,
//     mostrarCaracteristicas:function () {
//         return `
//           Caracteristicas: 
//           Color: ${this.color}
//           Tamaño: ${this.tamanio}
//           Precio: ${this.precio}
//           Patas: ${this.cantPatas}
//         `;
//     }

//   }
// console.log(mueble.mostrarCaracteristicas());

let menu = [
    { tipo: "plato", nombre: "Milanesa con fritas", precio: 2500 }
]


// console.log(MenuVegetariano);
let contador=0;
function mostrarMenu(menu,texto) {
    let html =``;
    html+=`
    <div >
        <h2 class="tipoDeMenu">${texto}</h2>
    `
    
    for (let i = 0; i < menu.length; i++) {
        let nombre = menu[i].nombre.toUpperCase();

        html+=`
        <div class="center">
            <h2 class="item">${nombre}</h2> 
            <h2 class="item">${menu[i].precio}</h2>
        </div>
        `        
    }
    // elementoMenu.innerHTML+=html;
    html+=`</div>`
    return html;

}
// mostrarMenu(menuVegetariano,"Vegetariano")
// mostrarMenu(menuAlplato,"Al Plato")
// mostrarMenu(menuEntradas,"Entradas")
// mostrarMenu(menuBebidas,"Bebidas")
// mostrarMenu(menuPostres,"Postres")

let menues=[
    {nombre:menuEntradas,tipo:"Entradas"},
    {nombre:menuAlplato,tipo:"Al Plato"},
    {nombre:menuVegetariano,tipo:"Vegetariano"},   
    {nombre:menuBebidas,tipo:"Bebidas"},
    {nombre:menuPostres,tipo:"Postres"}

]

function modalMenu(elementosHtml) {
    Swal.fire(
        {
            title: 'Menú',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            html: `${elementosHtml}`
    
        }
    )
    
}

let menuCompleto =``;

menues.forEach(menu=>{menuCompleto+=mostrarMenu(menu.nombre,menu.tipo)});

function pedido(id){
    modalMenu(menuCompleto)
}


