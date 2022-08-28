import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient ) { }

  obtenerUsuarios() {
    return this.http.get('https://reqres.in/api/user')
    .pipe(
      map( (resp:any) => resp['data']),
      catchError( this.manejarError )
    );
  }

  obtenerUsuariosConInterceptor() {
    return this.http.get('https://reqres.in/api/user')
    .pipe(
      map( (resp:any) => resp['data'])
    );
  }

  manejarError(error: HttpErrorResponse) {
    console.log( error )
    return throwError(( ) => new Error('Error inesperado: ' + error.message));
}

}
