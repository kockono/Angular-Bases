import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router' // Le pasamos como parametro la ID
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artista: any = {};
  loading: boolean = true;
  topsTracks: any[];

  constructor(
    private router: ActivatedRoute,
    private spotify: SpotifyService) {

    this.loading = true;
    this.router.params.subscribe(params => { //Aqui la recibimos el paramtro id que pasamos por la ruta
      this.getArtista(params['id']); // De parametros pasemos la id
      this.getTopTracks(params['id']);
    })
  }

  getArtista(id: string) {
    this.spotify.getArtistas(id).subscribe((artista: any) => {
      this.artista = artista;
      this.loading = false;
    })
  }

  getTopTracks( id:string){
      this.spotify.getTopTracks(id).subscribe( (respuesta:any) => {
          console.log(respuesta);
          this.topsTracks = respuesta;
      })
  }

}
