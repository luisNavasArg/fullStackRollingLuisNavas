let cantMesas = Number(prompt("Cantidad de mesas"));

let container = document.querySelector("div");

const changeState=(id)=>{
    let miId =`${id}`//sacar el #
    let elemento = document.getElementById(miId);
    elemento.classList.add("verde")
}

//declarativa 
function cambiarARojo(id){
    let miId =`${id}`//sacar el #
    let elemento = document.getElementById(miId);
    elemento.classList.add("rojo");
}
function tomarPedido(id) {
    Swal.fire({
        title: '<strong>Pedido</strong>',
        icon: 'info',
        html:
          `
          <form >
        <input type="text" id="entrada" placeholder="entrada">
        <input type="text" id="plato" placeholder="plato">
        <input type="text" id="bebida" placeholder="bebida">
        <input type="button" onclick="alert();" value="Agregar">
    </form>
          `,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up "></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
}
for (let i = 0; i < cantMesas; i++) { 
    container.innerHTML+=`
    <div 
        class="mesa" id="${i+1}" 
        >
        <div class="center">
        <p>Mesa N° ${i+1}</p>
                <button type="button" class="btn" onclick="changeState(${(i+1).toString()})">Ocupar</button>
            </div>
            <div class="end">
                <button class="btn" type="button" class="btn" onclick="tomarPedido(${(i+1).toString()})">Pedido</button>
            </div>

    </div>`
}

