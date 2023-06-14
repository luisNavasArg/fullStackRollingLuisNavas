const persona={
    nombre:"Patricio",
    edad:26,
    alias:"Pato",
    habilidades:{
        poder:340,
        velocidad:70
    }
}
const persona2={
    nombre:"Tutty",
    edad:23,
    alias:"La Tutty",
    habilidades:{
        poder:340,
        velocidad:70
    }
}

const {nombre,edad,alias,habilidades} = persona;

const getPersona=({edad,alias,habilidades})=>{
    const {poder,velocidad}=habilidades;
    return{
        avenger:alias,
        edad,
        poder,
        velocity:velocidad
    }
}
console.log(getPersona(persona));
console.log(getPersona(persona2));
console.log(persona2.habilidades.poder);

