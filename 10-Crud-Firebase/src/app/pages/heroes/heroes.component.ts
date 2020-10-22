import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { heroeModel } from '../../models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor( private heroesSerive:HeroesService) { }

  heroes: heroeModel[] = [];
  cargando = false;

  ngOnInit(): void {

    this.cargando = true;

    this.heroesSerive.getHeroes().subscribe( resp => {
        this.heroes = resp;
        this.cargando = false;
        
    })
  }

  eliminarHeroe(heroe: heroeModel, i:number) {

    Swal.fire({
      title: 'Está seguro',
      text: `Esta seguro que desea borrar a ${heroe.nombre}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      if( resp.value ) {
        this.heroes.splice(i, 1);
        this.heroesSerive.deleteHeroe(heroe.id).subscribe();
      }
    })
  }

}
