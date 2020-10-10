import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuevo-usuario',
  template: `
    <p>
      nuevo-usuario works!
    </p>
  `,
  styles: []
})
export class NuevoUsuarioComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.parent.params.subscribe(parametros => { //Recibe parametro de la ruta padre
      console.log(parametros);
      
    })
  }

  ngOnInit() {
  }

}
