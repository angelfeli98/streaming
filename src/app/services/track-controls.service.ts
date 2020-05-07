import { Injectable } from '@angular/core';

//new 
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackControlsService {

  private subject = new Subject<any>();

  constructor() { }


  sendMessage(message: string){
    this.subject.next({ text: message });
  }

  getMessage(): Observable<any>{
    return this.subject.asObservable();
  }




}
