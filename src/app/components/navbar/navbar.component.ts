import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  app_name = 'Open music';
  isLogged: boolean = false;
  isnotLogged: boolean = true;

  constructor() { }

  ngOnInit() {
    this.onCheckUSer();
  }

  logoutUser(){
    console.log("out");
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('auth');
    window.location.replace('/');
  }

  onCheckUSer(): void {
    if(localStorage.getItem('auth') == 'true'){
      this.isLogged = true;
      this.isnotLogged = false;
    } else {
      this.isLogged = false;
      this.isnotLogged = true;
    }
  }


}
