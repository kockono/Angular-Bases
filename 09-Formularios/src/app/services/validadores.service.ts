import { Injectable } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { rejects } from 'assert';
import { Observable } from 'rxjs';

interface ErrorValidate {
  [s:string]: boolean /* Puede retornar cualquier cantidad de llaves y seran booleanos esas llaves */
}


@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  existeUsuario(control: FormControl): Promise<ErrorValidate> | Observable<ErrorValidate> {

    if( !control.value ) { //Si no existe ningung valor manda que todo esta bien
      return Promise.resolve(null);
    }

    return new Promise((resolve, reject) => {

      setTimeout(() => {

        if (control.value === 'strider') {
          resolve({existe: true})
        } else {
          resolve(null); 
        }

      }, 3500);
    });
    
  }

  noUsarNombreChris(control: FormControl): ErrorValidate { //Retorna un objeto que retorna un booleano

    if(control.value?.toLowerCase() === 'chris') {

      return { //Retorna un objeto
        noUsarChris: true
      }
    }
    return null;

  }

  passwordsIguales(pass1:string, pass2:string) {

    return ( formGroup: FormGroup ) => { //Recibimos el form group con todas las validaciones que tenemos, funcion flecha por observable
        const pass1Control = formGroup.controls[pass1];
        const pass2Control = formGroup.controls[pass2];

        if(pass1Control.value === pass2Control.value) {
          pass1Control.setErrors(null);
        } else {
          pass2Control.setErrors({NoEsIgual: true}); // Declaramos el mensaje de que no es igual como verdadero
        }

    }

  }



}
