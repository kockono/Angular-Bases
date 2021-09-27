import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';

import { catchError, map, tap } from 'rxjs/operators'
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

    private carteleraPage = 1;
    private baseUrl = "https://api.themoviedb.org/3";
    public  cargando:boolean = false;
    //https://api.themoviedb.org/3/movie/520763?api_key=c6c5257605a8f915e2e79d03c0512fdb&language=en-ES
    
  constructor(private http: HttpClient) { }

  get params() {
    return {
      api_key: 'c6c5257605a8f915e2e79d03c0512fdb',
      lenguage: 'en-ES',
      page: this.carteleraPage.toString(), // Es porque los valores tiene que ser String

    }
  }

  resetCarteleraPage() {
    this.carteleraPage = 1;
  }

   getCartelera():Observable<Movie[]> {       

    if(this.cargando) {
      return of ([]); // Emite un arreglo vacio
    }
    
    this.cargando = true; // Que no haga multiples llamadas

    // Le agrega el signo de pregunta para pasarle los parametros
     return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`, {
       params: this.params
     }).pipe(
        map((resp) => resp.results), // Tranforma la respuesta en un observable
        tap(()=> {
        this.carteleraPage += 1; // Cada vez que se mande a llamar le sumara 1
        console.log(this.carteleraPage);
        this.cargando = false;
     }));
   }

   buscarPeliculas(texto:string) : Observable<Movie[]> {
     const params = {...this.params, page: '1', query: texto }

    return this.http.get<CarteleraResponse>(`${ this.baseUrl }/search/movie`, {
      params
    }).pipe(map(
      resp => resp.results
    )) 

  }

  getPeliculaDetalle(id: string) {
    return this.http.get(`${this.baseUrl}/movie/${ id }`, {
      params:this.params
    }).pipe(
      catchError(error => of([]))
      );
  }

  getCast(id: string) {
    return this.http.get(`${this.baseUrl}/movie/${ id }/credits`, {
      params:this.params
    }).pipe(
      map( (resp:any) => resp.cast),
      catchError(error => of(null)) // Con el 'of' regresas un observable en este caso un nullo o en caso anterior arreglo vacio
    )
  }
   
}
