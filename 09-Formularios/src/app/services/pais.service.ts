import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  constructor(private http:HttpClient) {



   }

   getPaises() {
    
    return this.http.get('https://restcountries.eu/rest/v2/lang/es').pipe(map( (resp:any) => { //Filtra los datos
      return resp.map( pais => ({ nombre: pais.name, codigo: pais.alpha3Code })  // retorname lo que retorna el resp.map, los estrae de estas propiedades
          //Es te es el map de los objetos de javascript, la palabra nombre y codigo solo son los alias donde se guardara los datos de pais.name y alphecode3
        )
    })
    );

  }

}
