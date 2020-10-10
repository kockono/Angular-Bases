import { Injectable } from '@angular/core';
import heroes from '../../docs/heroes.info';
import { DatosHeroe } from '../../models/heroe.interface'

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

public heroeArray = heroes;

  constructor() {
    console.log('Servicio Listo');
  }
  
  getHeroes(): DatosHeroe[]{ // Regresa Heroes en forma de arreglo
    
    return this.heroeArray; // Hace referencia a los herores
  }
  
  getHeroe(indx: string){ 
    return this.heroeArray[indx]; // Regresa el indice de 1 heroe
  }

  buscarHeroes(objetoBuscado: string):DatosHeroe[]{
    let heroesArr:DatosHeroe[] = [];
    objetoBuscado = objetoBuscado.toLowerCase();
    let i: number = 0;
    for(let heroe of this.heroeArray){
      let nombre = heroe.nombre.toLowerCase();
      heroe.indx = i;
      i++;
      if(nombre.indexOf(objetoBuscado) >=0){
        heroesArr.push(heroe);
      }
    }
    return heroesArr;
  }

}
