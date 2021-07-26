import { PeliculasService } from './../../services/peliculas.service';
import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public movies: Movie[] = [];
  public moviesSlideshow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])     


  onScroll() {
    // Ponemos un 13000 por la razon de que no llega al maximo al tocar el borde inferior de la pantalla
    const post = (document.documentElement.scrollTop || document.body.scrollTop ) + 1300; // Toma el valor del scroll para conocer sus cordenadas 
    const max  = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if(post > max ) {
      if(this.peliculasService.cargando) { return; }
    this.peliculasService.getCartelera().subscribe(movies => {
          this.movies.push(...movies); // Mete el objeto a un arreglo, o pusshea multiple objetos como un acomulador += o ++;
    });

    }
  }
  
  constructor(private peliculasService : PeliculasService) {
 
   }


  ngOnInit(): void {
    
    this.getDatos();

  }

  ngOnDestroy() { // Destruye el componente
    this.peliculasService.resetCarteleraPage();
  }

  getDatos() {
    this.peliculasService.getCartelera().subscribe(movies => {
      this.movies = movies;
      this.moviesSlideshow = movies;
    });
  }

}
