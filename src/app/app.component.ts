import { Component } from '@angular/core';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'open-music-frontend';

  isLogged: boolean = false;
  constructor() { 
    this.val();
  }

  val(){
    if(localStorage.getItem('auth') == 'true'){
      //return true;
      this.isLogged = true;
    }else{
     // this.router.navigate(['/user/login']);
      //return false;
      this.isLogged = false;
    }
  }
}
