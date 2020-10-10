import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService, private router:Router) {
    
  }


  canActivate(): boolean {

    if(this.auth.estaAutentificado()){ //Retornara un boleano el metodo si es mayor a 2 letras el token
      return true;
    } else {
      this.router.navigateByUrl('/login')
      return false;
    }

  }
  
}
