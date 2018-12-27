import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  constructor() { }

  create( itemDTO: ItemDTO): Observable<WhiteBoardItem> {
    return new Observable<WhiteBoardItem>()
  }
  register( registrationDTO: RegistrationDTO): Observable<boolean> {
    return new Observable<boolean>();
  }
}
