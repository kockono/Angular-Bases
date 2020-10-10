interface Xmen{
    nombre:string;
    poder:string;
}


let wolverine:Xmen = {
    
    nombre: "Wolverine",
    poder: "Regeneracion"

}


function Enviado( recibido:Xmen){

    console.log("Enviamos a: " + recibido.poder +" "+ recibido.nombre);
    
}
Enviado(wolverine);
