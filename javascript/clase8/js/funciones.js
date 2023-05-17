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
                <button type="button" class="btn oculto" id="pedido${i}">Pedido</button>
            </div>
        </div>
        `

    }
    console.log(input.value);
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