import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

// new 
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router){}

  canActivate(){
    if(localStorage.getItem('auth') == 'true'){
      return true;
    }else{
      this.router.navigate(['/user/login']);
      return false;
    }
  }
  
}
