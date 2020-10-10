import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;


  constructor(private spotify: SpotifyService) {
    this.loading = true;
   }

  buscar(termino: string) {
    if ( termino == "") return
    this.spotify.getArtista(termino).subscribe((data: any) => {
      this.artistas = data;
      this.loading = false;

    });

  }

}
