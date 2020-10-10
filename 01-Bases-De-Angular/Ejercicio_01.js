"use strict";
//Uso de let y Const
const NOMBRE = "Chris Marquez";
let edad2 = 22;
// Uso de funcion tipo flecha
let batman = {
    nombreH: "Bruno Diaz",
    artesMarciales: ["Karate", "Aikido", "Taekwon dwo"]
};
let resultadoDoble = (a, b) => (a + b) * 2;
console.log(resultadoDoble(5, 5));
//Funcion con parametros obligatorios, opcionales y por defecto
//Donde    nombre = obligatorios
//         poder = opcional
//         arma = por defecto arco
function getAvenger(nombre, poder, arma = "Arco") {
    let mensaje;
}
class Rectangulo {
    constructor(base, altura) {
        this.altura = altura;
        this.base = base;
    }
    calcularArea() {
        return this.base * this.altura;
    }
}
