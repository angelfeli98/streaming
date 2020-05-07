import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User;

  constructor(private authenticationService: AuthenticationService,
              private router: Router ) {
    this.user = new User();
   }

  ngOnInit() {
  }

  loginUser(form?: NgForm){
    
    //console.log(form.value);
    this.authenticationService.logUser(form.value)
    .subscribe(data => {
      //console.log(data.token);
      this.authenticationService.setToken(data.token);
      
      

      this.authenticationService.getUser(data.token)
      .subscribe(userData => {
        console.log(userData.usuario.nombre_usuario);
        localStorage.setItem('currentUser', JSON.stringify(userData));
        localStorage.setItem('auth', 'true');
        
        window.location.replace('/');
        // this.router.navigate(['/']);
        

        
        
      });
    });
  }

}
