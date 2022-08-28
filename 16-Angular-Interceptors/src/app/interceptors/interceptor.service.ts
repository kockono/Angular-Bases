import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Rxjs
import { Observable, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**Tenemos que decirle al app.module.ts que existe este interceptor en los providers, puedes tener todos los que quieras
 * inclusive guardarlos en un module y importarlos en el app.module.ts
 * providers: [
 *   {
 *     provide: HTTP_INTERCEPTORS,
 *     useClass: InterceptorService,
 *     multi: true
 *   }
 * ]
 */
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  /**
   * @param req   - Recibe primero la request
   * @param next  - Cuando termina el interceptor
   * @return      - Retorna un Observable que resuelve un evento HTTP
   */

  // Una request que ya se manipula ya no se puede volver a llamar
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'token-usuario': 'ABCKFJH2314314IJUH122143214'
    });

    const cloneRequest = req.clone({
      headers
    })

    return next.handle( cloneRequest ).pipe(
      catchError( this.manejarError )
    );
  }

  manejarError(error: HttpErrorResponse) {
    console.log( error )
    return throwError(( ) => new Error('Error inesperado: ' + error.message));
}

}
