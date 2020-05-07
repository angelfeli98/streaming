import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Discograph } from 'src/app/models/discograph';
import { Cancion } from 'src/app/models/cancion';
// import { TrackControlsComponent } from 'src/app/components/track-controls/track-controls.component';
import { TrackControlsService } from 'src/app/services/track-controls.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  audio = new Audio();
  
  base64: String = "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";

  // works
  casas: Array<Discograph>;
  house_buffer: Discograph; 
  buffer_str: string;
  canciones: Array<Cancion>;

  constructor(private dataService: DataService, private trackControl: TrackControlsService ) {
    this.house_buffer = new Discograph();
    this.casas = [];
    this.canciones = [];
   }

  ngOnInit() {
    
    // this.audio.src = "http://ec2-18-224-151-212.us-east-2.compute.amazonaws.com:3005/tracks/5cfa921f4af5626c7c17dde6";
    // this.audio.load();
    // this.audio.play();
    this.setDiscography();
    this.setTopTracks();
    //this.setIdPlaylist();

  }

  setDiscography(){
    this.dataService.getDiscographyHouse()
    .subscribe ( data => {
      //console.log(data);
      
      //console.log(data);
      for(var i = 0; i<data.casas.length; i++){
        //console.log(i);
        //console.log(data.casas[i].nombre);
        //console.log(data.casas.nombre);
        var buffer_obj:Discograph = new Discograph();

        buffer_obj.nombre = data.casas[i].nombre;
        buffer_obj.foto = data.casas[i].foto;
        buffer_obj._id = data.casas[i]._id;
        
        this.casas.push(buffer_obj);
      }

      // for (var p of this.casas){
      //   console.log(p._id);
      // }

    });
  }

  setTopTracks(){
    this.dataService.getTopTracks()
    .subscribe(data => {
      console.log(data);

      for (var i=0; i<data.canciones.length; i++){
        var buffer_obj: Cancion = new Cancion();

        buffer_obj.nombre = data.canciones[i].nombre;
        buffer_obj.imagen = data.canciones[i].imagen;
        buffer_obj._id = data.canciones[i]._id;
        buffer_obj.artista = data.canciones[i].artista.nombre;
        // console.log(buffer_obj.nombre);
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

  setIdPlaylist(){
    this.dataService.getIdPlaylist(localStorage.getItem("accessToken"))
    .subscribe(data => {
      console.log(data.playlists[0]._id);
      // localStorage.setItem('idPlaylist', data.playlists[0]._id);
    });
    
  }

  

  

  

}
