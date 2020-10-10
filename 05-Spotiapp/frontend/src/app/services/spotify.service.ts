import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQCJf_DuuQzAa9lZIZ4uv7ZW3doZao533oOemCIOfPb4zdrcsCuauWHZ7q8DdFMEMbJzY96SumKD3rLZOBk'
   })
   return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases').pipe( map ( data => data['albums'].items ));
  }

  getArtista(termino:string){
   return this.getQuery(`search?q=${termino}&type=artist&limit=10`)
               .pipe(map (data => data['artists'].items));
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
                .pipe(map (data => data['tracks']));
   }
  
  getArtistas(id:string){
    return this.getQuery(`artists/${id}`)
                // .pipe(map (data => data['artists'].items));
   }
  
  getArtistaOldForm(termino:string){
    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQB3wqdw5f02MJVVicGcKvc9RUHqO539MwREhRrrAfsWQNx93jQnVjHvwc_7YDK2pj9OaVRv0z5szcWoKy4'
   })
   return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=10`, { headers }).pipe(map (data => data['artists'].items));
  }

}
