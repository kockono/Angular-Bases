import { Component } from '@angular/core';

@Component({
    selector: 'app-funciones',
    templateUrl: './funcion.component.html'
})


export class FuncionComponent {
    myChangeColor() {
        const x = document.getElementById('try');
        x.style.color = 'blue';
    }
}
