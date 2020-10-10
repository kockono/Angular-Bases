import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'https://identitytoolkit.googleapis.com/v1/accounts:';

  private apiKey = 'AIzaSyAN_SPEPvKZ1zESDnfa55P6Af4EA75OUYM';

  userToken:string;

  // Crear nuevo usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]


  constructor(private http:HttpClient) {
    this.leerToken();
   }

  logout(){
    localStorage.removeItem('token');
  }

  login(usuario:UsuarioModel){

    const authData = {  
      ...usuario, 
      returnSecureToken:true 
    } 
                        // Le paso como parametro el correo y contraseña, y la token segura
    return this.http.post(`${this.URL}signInWithPassword?key=${this.apiKey}`, authData).pipe(map( resp =>{
      this.guardarToken(resp['idToken']); // Aqui mapeamos buscando el idToken del servicio y lo terminamos retornando
      return resp;
    }));; 
  }

  registrarUsuario(usuario:UsuarioModel){
    const authData = {  
      ...usuario, 
      returnSecureToken:true 
    } 
     
    return this.http.post(`${this.URL}signUp?key=${this.apiKey}`, authData).pipe(map( resp =>{
      this.guardarToken(resp['idToken']);
      return resp;
    }));

    // const authData = {
    //   email:usuario.email,
    //   password: usuario.password,
    //   returnSecureToken:true
    // }
  }

  private guardarToken(idToken:string){
    this.userToken = idToken;
    localStorage.setItem('token', idToken); //Aqui guardamos la idToken en la variable token del local storage

    let hoy  = new Date();
    hoy.setSeconds(3600); //Misma fecha pero 1 hora en el futuro

    localStorage.setItem('expira', hoy.getTime().toString()) //Cuando va expirar el token
  }

  private leerToken(){
     if(localStorage.getItem('token')) {
       this.userToken = localStorage.getItem('token');
     } else {
       this.userToken = '';
     }
     return this.userToken
  }

    estaAutentificado(): boolean {

      if(this.userToken.length < 2) {
        return false
      }

      const expira = Number(localStorage.getItem('expira'));
      const expiraDate = new Date();
      expiraDate.setTime(expira);

      if(expiraDate > new Date()) {
        return true;
      } else {
        return false;
      }


    return this.userToken.length > 2;
  }

}
