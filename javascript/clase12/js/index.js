localStorage.setItem("userId", "1");
localStorage.removeItem("user");
let preguntas = localStorage.getItem("preguntas");
console.log(JSON.parse(preguntas));

let alumnos = [
  { name: "Esteban" },
  { name: "Tutty" },
  { name: "Dami" },
  { name: "Agustin" },
  { name: "Natty" }
]
localStorage.setItem('alumnos', JSON.stringify(alumnos))
// localStorage.clear()

let login = `
<form id="form">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1"  class="form-label">Password</label>
    <input type="password" name="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" name="recuerdame" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Recuerdame</label>
  </div>
  <button type="submit" class="btn btn-primary">Ingresar</button>
  <button type="button" class="btn btn-primary" onclick="registrarUsuario()">Registrarse</button>
</form>
`;

let registrarse = `
<form id="registrarse">
<h2 class="text-white bg-dark">Registrarse</h2>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1"  class="form-label">Password</label>
    <input type="password" name="password" class="form-control" id="exampleInputPassword1">
  </div>
  
  <button type="submit" class="btn btn-primary">Registrarse</button>
  
</form>
`;
let miArraY =[]
function registrarUsuario() {
  document.querySelector(".container").innerHTML = registrarse;
  document.getElementById("registrarse").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(
      new FormData(e.target)
    )
    //buscando los datos del localStorage
    let datosGuradados = localStorage.getItem("usuarios");

    if(datosGuradados != null){
      let objData = JSON.parse(datosGuradados)
      if(verficarUsuario(data.email)){
        console.log('El usuario existe');

        }else{
      console.log("Usuario resgistrado con éxito!");
      
      miArraY=objData;
      miArraY.push(data)
      localStorage.setItem("usuarios", JSON.stringify(miArraY));
      let contenedor = document.querySelector(".container");
      contenedor.classList.add("d-flex")
      contenedor.classList.add("justify-content-center")
      contenedor.classList.add("align-items-center")
      contenedor.innerHTML = login;
      }
    }else{
      
      miArraY.push(data)
      localStorage.setItem("usuarios", JSON.stringify(miArraY));
      let contenedor = document.querySelector(".container");
      contenedor.classList.add("d-flex")
      contenedor.classList.add("justify-content-center")
      contenedor.classList.add("align-items-center")
      contenedor.innerHTML = login;
    }
  



  })
}

function verficarUsuario(email){
  console.log(email);
  let datosGuradados = localStorage.getItem("usuarios");
  let objData = JSON.parse(datosGuradados);
  miArraY=objData
  for (let i = 0; i < miArraY.length; i++) {
   if(email==miArraY[i].email){
    return true
   }
    
  }
  
}


let contenedor = document.querySelector(".container");
contenedor.classList.add("d-flex")
contenedor.classList.add("justify-content-center")
contenedor.classList.add("align-items-center")
contenedor.innerHTML += login;
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault()
  //  let datos ={  email:e.target[0].value}

  const data = Object.fromEntries(
    new FormData(e.target)
  )
  console.log(JSON.stringify(data))
  console.log(data)
  sessionStorage.setItem("user", JSON.stringify(data));
})





