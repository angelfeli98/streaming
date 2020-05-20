import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map, catchError } from 'rxjs/operators';

//new
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';
import { TokenResponse } from '../models/token-response';
import { BehaviorSubject, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;



  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

  readonly URL_GLOBAL_API = 'http://ec2-18-234-166-21.compute-1.amazonaws.com:7070/api/';

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  // nice
  postUser(user: User){
    return this.http.post<TokenResponse>(this.URL_GLOBAL_API + 'usuario/', {
      "nombre_usuario": user.nombre_usuario,
      "email": user.email,
      "password": user.password
    }, this.options)
    .pipe(map (data => data),
    catchError((error: HttpErrorResponse) => {
      this.showfail('Error al registrar usuario.');
      return throwError('');
    }));
  }

  // nice
  logUser(user: User){
    return this.http.post<TokenResponse>(this.URL_GLOBAL_API + 'loging/', {
      "password": user.password,
      "campo": user.nombre_usuario
    }, this.options)
    .pipe(map (data => data),
    catchError((error: HttpErrorResponse) => {
      this.showfail('Password o username incorrecto.');
      return throwError('');
    }));
  }

  putUser(user: User, token: string){
    return this.http.put<any>(this.URL_GLOBAL_API + 'usuario/' + `${token}`, {
      "nombre_usuario": user.nombre_usuario,
      "email": user.email
    })
      .pipe(map (data => data));
  }



  // nice
  getUser(token: string){
    return this.http.get<any>(this.URL_GLOBAL_API + 'usuario/' + `${token}`, this.options)
    .pipe(map (data => data) );
  }

  // nice
  setToken(token: string): void{
    localStorage.setItem('accessToken', token);
  }

  // nice
  getToken(): string{
    return localStorage.getItem('accessToken');
  }


  showfail(message: string) {
    this.toastr.error('', message, { progressBar: true } );
  }









}
