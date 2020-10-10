"use strict";
let avenger = {
    nombre2: "Heimsworth",
    clave: "Thor",
    poder: "Droga"
};
// let nombre2 = avenger.nombre2;
// let clave = avenger.clave;
// let poder = avenger.poder;
let { clave, poder, nombre2 } = avenger;
console.log(avenger);
let arreglo = ["Thor", "Hola", "Amigos"];
let [heroe, saludo, amistad] = arreglo;
console.log(amistad);
let promesa = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Promesa terminada");
        resolve();
    }, 1500);
});
promesa.then(function () {
    console.log('Funciono');
}, function () {
    console.error("No funciono");
});
