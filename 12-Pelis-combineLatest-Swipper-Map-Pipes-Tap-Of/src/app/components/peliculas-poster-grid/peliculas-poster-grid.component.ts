import { Router } from '@angular/router';
import { Component,  Input, OnInit } from '@angular/core';
import { PeliculasService } from './../../services/peliculas.service';
import { Movie } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  constructor(private router:Router) { }

  @Input() movies: Movie[]; // Lo recibe del componente padre

  ngOnInit(): void {


  }


  onMovieClick(movie:Movie) {
    this.router.navigate(['pelicula', movie.id])
    
  }


}
