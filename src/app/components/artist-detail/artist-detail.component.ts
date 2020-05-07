import { Component, OnInit } from '@angular/core';

// new 
import { DataService } from 'src/app/services/data.service';
import { Cancion } from 'src/app/models/cancion';
import { Artist } from 'src/app/models/artist';
import { Params, ActivatedRoute } from '@angular/router';
import { buffer } from 'rxjs/operators';
import { TrackControlsService } from 'src/app/services/track-controls.service';


@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {

  // works
  artista: Artist;
  canciones: Array<Cancion>;

  constructor(private dataService: DataService,
     private route: ActivatedRoute, private trackControl: TrackControlsService) {  }

  ngOnInit() {
    this.artista = new Artist();
    this.canciones = [];
    const _id = this.route.snapshot.params["id"];
    this.getTracks(_id);
  }

  getTracks(id: string){
    this.dataService.getArtistTracks(id)
    .subscribe(data => {
      //console.log(data.artistamas);
      this.artista.nombre = data.artistamas.nombre;
      this.artista.foto = data.artistamas.foto;

      for(var i=0; i<data.artistamas.canciones.length; i++){
        var buffer_obj: Cancion = new Cancion();

        buffer_obj.nombre = data.artistamas.canciones[i].nombre;
        buffer_obj.imagen = data.artistamas.canciones[i].imagen;
        buffer_obj._id = data.artistamas.canciones[i]._id;
        
        this.canciones.push(buffer_obj);
      }

    });
  }


  playAudio(_id: string){
    console.log(_id);
    //console.log("sa");
    //this.trackControl.playAudio(_id);
    this.trackControl.sendMessage(_id);
  }

  addTrack(_id: string){
    // this.dataService.addTrackToPlaylist()
    this.dataService.getIdPlaylist(localStorage.getItem("accessToken"))
    .subscribe(data => {
      console.log(data.playlists[0]._id);
      this.dataService.addTrackToPlaylist(data.playlists[0]._id, _id)
      .subscribe(datat => {
        console.log(datat);
      });
      // localStorage.setItem('idPlaylist', data.playlists[0]._id);
    });
  }

}
