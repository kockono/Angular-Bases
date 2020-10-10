import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router"; // Ruta Activa
import { HeroesService } from "../services/heroes.service";


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent{

  heroe:any ={};

  constructor(private activatedRoute: ActivatedRoute,
              private _heroeService: HeroesService) {
 
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroeService.getHeroe(params['id'])
      console.log(params);
    });
   }

}
