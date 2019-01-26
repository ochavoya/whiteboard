import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { ItemDTO, WhiteBoardItem, RegistrationDTO, LoginDTO, RestMessage } from '../model/whiteboard';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { share } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class RestClientService implements OnInit {

  api='http://localhost:8080/whiteboard';

  private headers: HttpHeaders;

  constructor(private http: HttpClient, private httpHandler: HttpHandler) { }

  ngOnInit() {
    this.headers = new HttpHeaders();
    this.headers.set('Content-Type','application/JSON')
  }

  register(registrationDTO: RegistrationDTO): Observable<RestMessage<string>> {
    return this.restClient('post', '/register', registrationDTO) as Observable<RestMessage<string>>;
  }

  login(loginDTO: LoginDTO): Observable<RestMessage<string>> {
    return this.restClient('post', '/login', loginDTO) as Observable<RestMessage<string>>;
  }

  logout(username: string): Observable<RestMessage<string>> {
    return this.restClient('post', '/logout', username) as Observable<RestMessage<string>>;
  }

  create(itemDTO: ItemDTO): Observable<RestMessage<ItemDTO>> {
    return this.restClient('post', '/create', itemDTO) as Observable<RestMessage<ItemDTO>>;
  }

  load(): Observable<RestMessage<ItemDTO[]>> {
    return this.restClient('get', '') as Observable<RestMessage<ItemDTO[]>>;
  }

  restClient(method: string, path: string, data?: any): Observable<RestMessage<any>> {
    path = `${this.api}${path}`;
    switch (method) {
      case 'get':
        console.log(path);
        return this.http.get(path, {headers:this.headers}).pipe(share()) as Observable<RestMessage<any>>;
      default:
        if (data == null) throwError('POST without data');
        return this.http.post(path, data, {headers:this.headers}).pipe(share()) as Observable<RestMessage<any>>;
    }
  }
}