import { UsuariosService } from './services/usuarios.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'interceptors';

  constructor(private usuariosService: UsuariosService) {

    this.usuariosService.obtenerUsuariosConInterceptor().subscribe(resp => {
        console.log( resp );

    })

  }
}
