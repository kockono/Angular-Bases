"use strict";
class Heroe {
    // Ejecutar codigo antes.
    constructor(nombre4, equipo, nombreReal, puedePelear, peleasGanadas) {
        this.nombre4 = "Antman";
        this.equipo = undefined;
        this.nombreReal = undefined;
        this.puedePelear = false;
        this.peleasGanadas = 1;
        this.nombre4 = nombre4;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        this.puedePelear = puedePelear;
        this.peleasGanadas = peleasGanadas;
    }
}
let antman = new Heroe("Chris", "integramigos", "kockono", true, 5);
console.log(antman);
