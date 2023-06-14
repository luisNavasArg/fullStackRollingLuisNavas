const alumnos = ["Agustin","Andres","Christian","Daniel"];
const [,,a2] = alumnos;
console.log(a2);
const useState = ["Tutty",(nombre)=>{console.log(`Hola ${nombre}`);}];
console.log(useState);
const [state,setState]= useState;
setState("Pato");
