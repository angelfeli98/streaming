import { Component, OnInit, enableProdMode } from '@angular/core';

// new
import { AuthenticationService } from '../../services/authentication.service';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

enableProdMode();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthenticationService]        // new to use service
})
export class RegisterComponent implements OnInit {

  private user: User;
  
  constructor(private authenticationService: AuthenticationService, 
              private toastr: ToastrService,
              private dataService: DataService ) { 
     this.user = new User();
  }
  
  ngOnInit() {
  }

  

  registerUser(form?: NgForm){
    //console.log(form.value);
    this.authenticationService.postUser(form.value)
      .subscribe(data => {
        //console.log(data);
        //console.log(data.token);
        
        
        this.dataService.createPlaylist(data.token, "favoritasusrb")
        .subscribe(data_p => {
          console.log(data_p);
        });

        this.authenticationService.setToken(data.token);
        this.authenticationService.getUser(data.token)
          .subscribe(userData => {
            localStorage.setItem('currentUser', JSON.stringify(userData));
            localStorage.setItem('auth', 'true');
            
            window.location.replace('/');

          });
        //console.log("get with succes");
      });
  }

  

}
