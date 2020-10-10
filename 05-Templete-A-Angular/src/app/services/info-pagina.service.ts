import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Captura el Json Para un cliente http
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any ={};

  constructor(private http: HttpClient) {

    // this.cargarInfo();
    this.cargarEquipo();
    //Leer el archivo Json
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        // console.log(resp);
    });
  }

  private cargarEquipo() {
    this.http.get('https://angular-templete.firebaseio.com/equipo.json')
      .subscribe((resp) => {

        this.cargada = true;
        this.equipo = resp;
        // console.log(resp)

      });
  }


}
