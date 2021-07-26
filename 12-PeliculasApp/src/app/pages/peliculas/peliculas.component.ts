import { PeliculasService } from './../../services/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarteleraResponse } from 'src/app/interfaces/cartelera-response';
import { Location } from '@angular/common';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public pelicula: any;
  public cast: any;

  constructor( private activatedRoute: ActivatedRoute,
               private peliculasServie: PeliculasService,
               private location: Location,
               private router: Router) { }

  ngOnInit(): void {


    const { id } = this.activatedRoute.snapshot.params; // Destructuracion de un objeto, extrae de.
    //const  id = this.activatedRoute.snapshot.params.id; // Snapshot como se encuentra actualmente

    combineLatest([
      this.peliculasServie.getPeliculaDetalle( id ),
      this.peliculasServie.getCast( id )
    ]).subscribe( ([pelicula, cast]) => { // Destructuramos
        if(!pelicula) {
          this.router.navigateByUrl('/home');
          return
        }      
      
        this.pelicula = pelicula;
        this.cast = cast.filter(actor => console.log(actor))
        
    });

    // combineLatest([
    //   this.peliculasServie.getPeliculaDetalle( id ),
    //   this.peliculasServie.getCast( id )
    // ]).subscribe( (objeto) => { // Destructuramos
    //   console.log(objeto.cast);
      
    // });

  }

  onRegresar() {
    this.location.back();
  }


}
