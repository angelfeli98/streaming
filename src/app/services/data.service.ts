import { Injectable } from '@angular/core';

// new
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  readonly URL_GLOBAL_API = 'http://ec2-18-218-148-39.us-east-2.compute.amazonaws.com:7070/api/';
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  getDiscographyHouse(){
    return this.http.post<any>(this.URL_GLOBAL_API + 'casa/datos/', {
      "mode": 1
    }, this.options)
    .pipe(map (data => data));
  }

  getDiscographyDetail(_id: string){
    return this.http.post<any>(this.URL_GLOBAL_API + 'casa/datos/', {
      "mode": 2,
      "id": _id
    }, this.options)
    .pipe(map (data => data));
  }

  getArtistTracks(_id: string){
    return this.http.post<any>(this.URL_GLOBAL_API + 'artista/buscar/', {
      "mode": 3,
      "id": _id
    }, this.options)
    .pipe(map (data => data));
  }

  // ec2-18-218-148-39.us-east-2.compute.amazonaws.com:7070/api/cancion/buscar

  getTopTracks(){
    return this.http.post<any>(this.URL_GLOBAL_API + 'cancion/buscar/',  {
      "mode": 1
    }, this.options)
    .pipe(map (data => data));
  }

  getTrackDetail(_id: string){
    return this.http.post<any>(this.URL_GLOBAL_API + 'cancion/buscar/', {
      "mode": 2,
      "id": _id      
    }, this.options)
    .pipe(map (data => data));
  }

  scoreTrack(_id: string){
    return this.http.post<any>(this.URL_GLOBAL_API + 'cancion/buscar/', {
      "mode": 3,
      "id": _id
    }, this.options)
    .pipe(map (data => data));
  }

  //  nice
  createPlaylist(token: string, name: string ){
    return this.http.post<any>(this.URL_GLOBAL_API + 'playlist/save/' + `${token}`, {
      "titulo": "favoritas",
      "duracion": 0.0 
    },this.options)
    .pipe(map (data_p => data_p));
  }



  getIdPlaylist(token: string){
    return this.http.post<any>(this.URL_GLOBAL_API + 'playlist/usuario/', {
      "mode": 1,
      "token": token
    }, this.options)
    .pipe(map (data => data));
  }

  getDataPlaylist(id_playlist: string){
    return this.http.post<any>(this.URL_GLOBAL_API + 'playlist/usuario/', {
      "mode": 2,
      "id": id_playlist
    }, this.options)
    .pipe(map (data => data));
  }


  addTrackToPlaylist(id_playlist: string,id_track: string){
    return this.http.post<any>(this.URL_GLOBAL_API + 'playlist/cancion/' + `${id_playlist}`, {
      "mode": 3,
      "cancion": id_track
    }, this.options)
    .pipe(map(data => data));
  }

  deleteTrackToPlaylist(id_playlist: string,id_track: string){
    return this.http.post<any>(this.URL_GLOBAL_API + 'playlist/cancion/' + `${id_playlist}`, {
      "mode": 2,
      "cancion": id_track
    }, this.options)
    .pipe(map(data => data));
  }

  





}
