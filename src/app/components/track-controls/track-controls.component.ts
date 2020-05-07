import { Component, OnInit, OnDestroy } from '@angular/core';


// new 
import { Subscription } from 'rxjs';
import { TrackControlsService } from 'src/app/services/track-controls.service';
// import { $ } from 'protractor';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-track-controls',
  templateUrl: './track-controls.component.html',
  styleUrls: ['./track-controls.component.css']
})
export class TrackControlsComponent implements OnInit {
  private audio = new Audio();
  private isPlaying = 0;
  isPlay : boolean = false;
  playmusic_start : string = '0:00';
  playmusic_end : string;


  name_song: string;
  name_artists: string;
  image: string;

  messages: any[] = [];
  subscription: Subscription;

  constructor(private trackControl: TrackControlsService, private dataService: DataService) { 
    
  }



  ngOnInit() {
    // this.audio = new Audio();

    this.subscription = this.trackControl.getMessage()
    .subscribe(message => {
      console.log(message.text);

    // let audio = new Audio();
    
    this.audio.src = "http://ec2-18-224-151-212.us-east-2.compute.amazonaws.com:3005/tracks/" + message.text;
    
    
    this.audio.load();
    this.audio.play();
    this.dataService.getTrackDetail(message.text)
    .subscribe(data => {
      //console.log(data);
      this.name_song = data.cancion.nombre;
      this.name_artists = data.cancion.artista.nombre;
      this.image = data.cancion.imagen;
    });

    this.dataService.scoreTrack(message.text)
    .subscribe(data => {
      console.log(data);
    });

    (async () => { 
      // Do something before delay
      console.log('before delay')
  
      await this.delay(2000);
      if(this.audio.duration > 10000){
        await this.delay(1000);
      }
      if(this.audio.duration > 10000){
        await this.delay(1000);
      }
      if(this.audio.duration > 10000){
        await this.delay(1000);
      }
      if(this.audio.duration > 10000){
        await this.delay(1000);
      }
      if(this.audio.duration > 10000){
        await this.delay(1000);
      }
      if(this.audio.duration > 10000){
        await this.delay(1000);
      }
      if(this.audio.duration > 10000){
        await this.delay(1000);
      }
      if(this.audio.duration > 10000){
        await this.delay(2000);
      }
      if(this.audio.duration > 10000){
        await this.delay(2000);
      }
      
      // Do something after
      console.log('after delay')
      console.log(this.audio.duration);
      this.playmusic_end = this.ConvertTime(this.audio.duration);

    })();
    
    this.isPlaying = 1;
    this.isPlay = true;


    // console.log("" + this.audio.duration);
    //var lengaudio = parseInt("" + this.audio.duration);
    
    //console.log(lengaudio);
    //this.playmusic_end = this.ConvertTime(this.audio.duration);

    });
  }

  playAudio(){
    if(this.isPlaying == 0){
      this.audio.play();
      this.isPlaying = 1;
    }else{

      this.audio.pause();
      this.isPlaying = 0;
    }

    this.isPlay = !this.isPlay;
  }

  ConvertTime(timeSecond){
    var hour = 0;
    var minutes = 0;
    var second = 0;
    var stringTime = "";
    //hour = Math.floor(timeSecond / 3600);
    
    //timeSecond = timeSecond - hour * 3600;
    
    minutes = Math.floor(timeSecond / 60);
    


    timeSecond = timeSecond - (minutes * 60);
    second = Math.floor(timeSecond);
    
    var correctSecond = "";
    if (second < 10) {
        correctSecond = "0" + second;
    } else {
        correctSecond = "" + second;
    }
    
        stringTime = minutes + ":" + correctSecond;
    
    return stringTime;
  }

  
   delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  

  

}
