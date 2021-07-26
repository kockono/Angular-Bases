import { PeliculasService } from './../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Parallax } from 'swiper';
import { Movie } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, 
              private peliculasService:PeliculasService) { }


  public movies: Movie[] = [];

  public texto:string = '';
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => { // El parametro que pasamos por url
      this.texto = params.texto;
      this.peliculasService.buscarPeliculas(params.texto).subscribe(movies => {
        this.movies = movies;
        
      })
    
    })

  }



}
