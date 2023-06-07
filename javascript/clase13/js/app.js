class Vehiculo{
    encendido=false
    constructor(ruedas,motor,luces){
        this.ruedas=ruedas;
        this.motor=motor;
        this.luces=luces;
    }
    encender(){
        if(this.encendido){
            console.log("está encendido el auto");
        }else{
            console.log("encendiendo el auto");
            this.encendido=true;
        }
    }
    apagar(){

    }
    cambios(){

    }

}
// let auto = new Vehiculo(4,"4 cilindros",'traseras y delanteras');
// console.log(auto.encender());
// console.log(auto.encender());
class Auto extends Vehiculo{
    constructor(marca,modelo,precio,patente,ruedas,motor,luces){
        super(ruedas,motor,luces);
        this.marca=marca;
        this.modelo=modelo;
        this.precio=precio;
        this.patente=patente;
    }
    mostrarDatos(){
        return {marca:this.marca,modelo:this.modelo,precio:this.precio,patente:this.patente};
    }

}
let auto = new Auto("Fiat","Tempra",5000000,"aer215",4,"6 cilindros",'traseras y delanteras');
console.log(auto);
let user = {
    name:"Pedro"
}
console.log(user);