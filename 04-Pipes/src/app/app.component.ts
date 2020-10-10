import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre    : string    =  "Capitan America";
  nombre2   : string    = "cHris sIDDharta GaUtaMa";
  arreglo   : number[]  = [1,2,3,4,5,6,7,8,9,10];
  porcentaje: number    = 0.235;
  salario   : number    = 1234.5;
  PI        : number    = Math.PI;
  activar   : boolean   = true;

  idioma    : string    = 'fr';
  videoUrl  : string    = "https://www.youtube.com/embed/XX4NxWahPPU"

  fecha = new Date();
  valorPromesa = new Promise<string>( (resolve, reject) => {

    setTimeout(() => {
        resolve('Llego la data');
    }, 4500);
  })

  personajes = {
    nombre: 'logan',
    clave: 'wolverine',
    edad: 500,
    direccion: {
      calle:'Primera',
      casa:20
    }
  }

  cambiarIdioma(idioma){
  this.idioma = idioma;
  }

}
