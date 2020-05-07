import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  currentUser: User;

  
  constructor(private authenticationService: AuthenticationService) { 
    this.currentUser = new User();
  }

  ngOnInit() {
    this.getUserInformation();
  }


  getUserInformation(){
    try{
      var _user = JSON.parse(localStorage.getItem('currentUser'));
      this.currentUser.nombre_usuario = _user.usuario.nombre_usuario;
      this.currentUser.playlits = _user.usuario.playlits;
      this.currentUser.email = _user.usuario.email;
      this.currentUser.foto = _user.usuario.foto.data;
      this.currentUser._id = _user.usuario._id;
      
    }catch(err){
      console.log(err);
    }
    //console.log(_user.usuario.nombre_usuario);
  }

  updateUser(){
    //console.log(this.currentUser.email);
    this.authenticationService.putUser(this.currentUser, localStorage.getItem('accessToken'))
      .subscribe( data => {
        console.log(data);
        this.authenticationService.getUser(localStorage.getItem('accessToken'))
          .subscribe(userData => {
            console.log(userData.usuario.nombre_usuario);
            localStorage.setItem('currentUser', JSON.stringify(userData));
          });
      });
  }
  

}
