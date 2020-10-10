"use strict";
let wolverine = {
    nombre: "Wolverine",
    poder: "Regeneracion"
};
function Enviado(recibido) {
    console.log("Enviamos a: " + recibido.poder + " " + recibido.nombre);
}
Enviado(wolverine);
