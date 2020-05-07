import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { TrackControlsService } from 'src/app/services/track-controls.service';
import { Cancion } from 'src/app/models/cancion';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  canciones: Array<Cancion>;
  name_playlist: string;
  final_canciones: Array<Cancion>;


  constructor(private dataService: DataService, private trackControl: TrackControlsService ) { 
    this.canciones = [];
    this.final_canciones = [];
  }

  ngOnInit() {
    this.setPlaylist();
    
  
  }


  setPlaylist(){
    this.dataService.getIdPlaylist(localStorage.getItem("accessToken"))
    .subscribe(data => {
      // console.log(data.playlists[0].titulo);
      this.name_playlist = data.playlists[0].titulo;

      this.dataService.getDataPlaylist(data.playlists[0]._id)
      .subscribe(datat => {
        console.log(datat);
        // console.log(datat.playlists.canciones_user[0]);

        for (var i=0; i<datat.playlists.canciones_user.length; i++){
          //var buffer_obj: Cancion = new Cancion();
          
          console.log(datat.playlists.canciones_user[i]);

         // buffer_obj._id = datat.playlists.canciones_user[i];

          this.dataService.getTrackDetail(datat.playlists.canciones_user[i])
          .subscribe(datain => {
            var buffer_obj: Cancion = new Cancion();

            buffer_obj.nombre = datain.cancion.nombre;
            buffer_obj.artista = datain.cancion.artista.nombre;
            buffer_obj._id = datain.cancion._id;
            
            this.canciones.push(buffer_obj);
          });
          // console.log(buffer_obj.nombre);
          //this.canciones.push(buffer_obj);
        }

      });
    });
  }

  playAudio(_id: string){
    console.log(_id);
    //console.log("sa");
    //this.trackControl.playAudio(_id);

    this.trackControl.sendMessage(_id);

  }

  delTrack(_id: string){
    // this.dataService.addTrackToPlaylist()
    this.dataService.getIdPlaylist(localStorage.getItem("accessToken"))
    .subscribe(data => {
      console.log(data.playlists[0]._id);
      this.dataService.deleteTrackToPlaylist(data.playlists[0]._id, _id)
      .subscribe(datat => {
        console.log(datat);
      });
      // localStorage.setItem('idPlaylist', data.playlists[0]._id);
    });
  }



}
