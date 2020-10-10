import {Component} from '@angular/core';

let i = 0;
@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {
    monstrar = true; // Propiedades

    explicacion: any = {
        mensaje: 'La funcion ngIf destruye el objeto al estar true, al hacer click al evento la variable cambia a true y viceversa',
        mensaje2: 'El evento utilizado aqui ngFor sirve para recorrer listas o arreglos',
        autor: 'Google 2009'

    };
    personajes: string[] = ['Veela', 'Illenium', 'J.Fla'];
    onMouseOut() {
        if (i === 0) {
            i++;
            alert('Hey Pillin');
        }
    }
}
