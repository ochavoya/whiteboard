import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ItemDTO, WhiteBoardItem, RegistrationDTO, LoginDTO, RestMessage } from '../model/whiteboard';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  constructor(private http: HttpClient) { }

  register(registrationDTO: RegistrationDTO): Observable<RestMessage<string>> {
    return this.restClient
      ('post', '/register', registrationDTO) as Observable<RestMessage<string>>;
  }

  login(loginDTO: LoginDTO): Observable<RestMessage<string>> {
    return this.restClient
      ('post', '/register', loginDTO) as Observable<RestMessage<string>>;
  }

  create(itemDTO: ItemDTO): Observable<RestMessage<ItemDTO>> {
    return this.restClient
      ('post', '/register', itemDTO) as Observable<RestMessage<ItemDTO>>;
  }

  load(): Observable<RestMessage<ItemDTO[]>> {
    return this.restClient
      ('get', '') as Observable<RestMessage<ItemDTO[]>>;
  }

  restClient(method: string, path: string, data?: any): Observable<RestMessage<any>> {
    switch (method) {
      case 'get':
        return this.http.get('/whiteboard/' + path) as Observable<RestMessage<any>>;
        break;
      default:
        if (data == null) throwError('POST without data');
        return this.http.post('/whiteboard/' + path, data) as Observable<RestMessage<any>>;
    }
  }
}