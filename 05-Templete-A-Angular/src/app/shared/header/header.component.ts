import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nombre: String = 'Hola';
  
  constructor(public _servicio: InfoPaginaService, private router: Router) {
    
  }

  buscarProducto(termino:string) {
      if(termino.length < 1) { // Si pone un string automaticamente te traira toda la base de datos
        return
      }
      this.router.navigate(['/search', termino]); // Pasamos como parametro el termino a search
  }

  ngOnInit() {
  }

}
