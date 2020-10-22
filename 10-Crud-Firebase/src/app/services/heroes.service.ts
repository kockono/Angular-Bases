import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { heroeModel } from '../models/heroe.model';
import { map, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http:HttpClient) {

   }

   private URL = 'https://login-angular-92758.firebaseio.com';

   crearHeroe(heroe: heroeModel){

      return this.http.post(`${this.URL}/heroes.json`, heroe)
                      .pipe(map ( (resp:any) => { 
                        heroe.id = resp.name;
                      }));
   }

   actualizarHeroe(heroe:heroeModel) {

    const heroeTemp = { //Captura todas las propiedad del objeto heroe
      ...heroe
    };

    // const heroeTemp2 = {  //Lo mismo pero mas resumido
    //   nombre:heroe.nombre,
    //   poder:heroe.poder,
    //   vivo:heroe.vivo 
    // }

    console.log(heroeTemp);
    delete heroeTemp.id;
    console.log(heroeTemp);
    return this.http.put(`${this.URL}/heroes/${heroe.id}.json`, heroeTemp);

   }

   getHeroes() {
     return this.http.get(`${this.URL}/heroes.json`).pipe(
       map(this.crearArreglo), //Sabe por default que le tiene que mandar el arregloo bueno la respuesta
       delay(500)); // Retrasa la petición .5 Segundos

      //  map(this.crearArreglo(resp)));
   }

   getHeroe(id:string) {
    return this.http.get(`${this.URL}/heroes/${id}.json`);
   }

   deleteHeroe(id:string) {
     return this.http.delete(`${this.URL}/heroes/${id}.json`);
   }

   private crearArreglo(heroesObj: object) {
      const heroes:heroeModel[] = [];

      if(heroesObj == null ) return [];

      Object.keys(heroesObj).forEach(key => { //Capitulo 221
          // console.log(heroesObj);
          const heroe:heroeModel = heroesObj[key] // Hace un barrido para retornarlos
          heroe.id = key; //Agregamos que la id sea tambien un valor de string dentro del arreglo
          heroes.push(heroe);
        })
        // console.log(heroes); // Retorno las ids de cada heroe en numeros

      return heroes;
   }

}
