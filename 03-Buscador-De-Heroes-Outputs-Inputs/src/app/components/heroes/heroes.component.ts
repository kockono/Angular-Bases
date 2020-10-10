import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../services/heroes.service';
import { DatosHeroe } from '../../models/heroe.interface'
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',

})
export class HeroesComponent implements OnInit {

  heroes: DatosHeroe[] = [];
  today: number = Date.now();

  constructor( private _heroesService: HeroesService,
              private router:Router ) {

   }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes(); //Accedemos al metodo donde se encuentra los heroes
  }
  verHeroe(index:number){
    this.router.navigate(['/heroe',index]);
  }

}
