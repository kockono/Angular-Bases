import { Component } from '@angular/core';
let i = 0;
@Component({
  selector: 'app-root', // Aqui va renderizar todo desde el index html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  nombre  = 'Chris';
  apellido = 'Marquez';
  onButtonClick() {
    if (i === 0) {
    alert('Simplemente Clickeaste');
    i++;
    }
  }
  myChangeColor() {
    const x = document.getElementById('try');
    x.style.color = 'green';
}
  moveButton() {
    let rB = document.getElementsByClassName('randomButton');
      
  }
  mensajeRandom(){
    let numero = Math.floor(Math.random()* 10);
    let palabras:string[]=["Hola","Adios","Yo solo digo que no se nada","Pedrito","Juan Carlos","Bingo","Angular Suckea","React vs Angular","Deno vs NodeJs","Adios Angular"];
    console.log(palabras[numero]);
  }
}
