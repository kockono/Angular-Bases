import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
 
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  objetoBuscado:string;
  
  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      this.objetoBuscado = params['objetoBuscado'];
      this.heroes = this._heroesService.buscarHeroes(params['objetoBuscado']);
      console.log(this.heroes);
    });
  }
  

}
