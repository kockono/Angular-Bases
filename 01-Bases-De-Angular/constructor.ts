class Heroe {
    nombre4:string = "Antman";
    equipo?:string = undefined;
    nombreReal?:string = undefined;
    puedePelear:Boolean=false;
    peleasGanadas:Number = 1 ;
    // Ejecutar codigo antes.
    constructor(nombre4:string,equipo:string,nombreReal:string,puedePelear:Boolean,peleasGanadas:Number){
        this.nombre4=nombre4;
        this.equipo= equipo;
        this.nombreReal=nombreReal;
        this.puedePelear=puedePelear;
        this.peleasGanadas=peleasGanadas;
    }
}
let antman:Heroe = new Heroe("Chris","integramigos","kockono",true,5);
console.log(antman);
