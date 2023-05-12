let cantMesas = Number(prompt("Cantidad de mesas"));

let container = document.querySelector("div");

const changeState=(id)=>{
    let miId =`${id}`//sacar el #
    let elemento = document.getElementById(miId);

    elemento.classList.add("verde")
}

for (let i = 0; i < cantMesas; i++) { 
    container.innerHTML+=`<div class="mesa" id="${i+1}" onclick="changeState(${(i+1).toString()})">${i+1}</div>`
}
