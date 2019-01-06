import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { ItemDTO, WhiteBoardItem, RegistrationDTO, LoginDTO, RestMessage } from '../model/whiteboard';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class RestClientService {

  api='http://localhost:8080/whiteboard';

  constructor(private http: HttpClient, private httpHandler: HttpHandler) { }

  register(registrationDTO: RegistrationDTO): Observable<RestMessage<string>> {
    return this.restClient('post', '/register', registrationDTO) as Observable<RestMessage<string>>;
  }

  login(loginDTO: LoginDTO): Observable<RestMessage<string>> {
    return this.restClient('post', '/register', loginDTO) as Observable<RestMessage<string>>;
  }

  create(itemDTO: ItemDTO): Observable<RestMessage<ItemDTO>> {
    return this.restClient('post', '/register', itemDTO) as Observable<RestMessage<ItemDTO>>;
  }

  load(): Observable<RestMessage<ItemDTO[]>> {
    return this.restClient('get', '') as Observable<RestMessage<ItemDTO[]>>;
  }

  restClient(method: string, path: string, data?: any): Observable<RestMessage<any>> {
    path = `${this.api}${path}`;
  
    switch (method) {
      case 'get':
        return this.http.get(path) as Observable<RestMessage<any>>;
      default:
        if (data == null) throwError('POST without data');
        return this.http.post(path, data) as Observable<RestMessage<any>>;
    }
  }
}