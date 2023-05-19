function crearPizarra(){

    for (let i = 0; i < 1000; i++) {
        console.log(i);
        document.querySelector(".container").innerHTML+=`<div class="pixel" onmouseover="pintar()">x</div>`
    }
}
crearPizarra();
//Crear los colores
//tamaño del pincel 





