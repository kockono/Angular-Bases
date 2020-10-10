//Uso de let y Const
const NOMBRE = "Chris Marquez";
let edad2 = 22;

interface Heroe2 {
    nombreH:string;
    artesMarciales: string[];
}
// Uso de funcion tipo flecha
let batman:Heroe2 = {
    nombreH: "Bruno Diaz",
    artesMarciales:["Karate", "Aikido","Taekwon dwo"]
}

let resultadoDoble = (a:number, b:number) => (a+b)*2;

console.log(resultadoDoble(5,5));

//Funcion con parametros obligatorios, opcionales y por defecto
//Donde    nombre = obligatorios
//         poder = opcional
//         arma = por defecto arco
function getAvenger(nombre:string, poder?:string, arma:string ="Arco"){
let mensaje:string;
    
}

class Rectangulo {
    base:number
    altura:number;
    constructor(base:number,altura:number) {
        this.altura=altura;
        this.base=base;
    }
    calcularArea():number{
        return this.base * this.altura;
    }
    
}