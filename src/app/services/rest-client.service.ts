import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError, Subject } from 'rxjs';
import {
  ItemDTO,
  RegistrationDTO,
  LoginDTO,
  RestMessage
} from '../model/whiteboard';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { share, take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RestClientService implements OnInit {
  api = 'http://localhost:8080/whiteboard';

  private headers: HttpHeaders;

  constructor(private http: HttpClient, private httpHandler: HttpHandler) {}

  ngOnInit() {
    this.headers = new HttpHeaders();
    this.headers.set('Content-Type', 'application/JSON');
  }

  register(registrationDTO: RegistrationDTO): Subject<RestMessage<string>> {
    return this.restClient('post', '/register', registrationDTO) as Subject<
      RestMessage<string>
    >;
  }

  login(loginDTO: LoginDTO): Subject<RestMessage<string>> {
    return this.restClient('post', '/login', loginDTO) as Subject<
      RestMessage<string>
    >;
  }

  logout(username: string): Subject<RestMessage<string>> {
    return this.restClient('post', '/logout', username) as Subject<
      RestMessage<string>
    >;
  }

  create(itemDTO: ItemDTO): Subject<RestMessage<ItemDTO>> {
    return this.restClient('post', '/create', itemDTO) as Subject<
      RestMessage<ItemDTO>
    >;
  }

  load(): Subject<RestMessage<ItemDTO[]>> {
    return this.restClient('get', '') as Subject<RestMessage<ItemDTO[]>>;
  }

  restClient(
    method: string,
    path: string,
    data?: any
  ): Subject<RestMessage<any>> {
    path = `${this.api}${path}`;
    switch (method) {
      case 'get':
        return this.http
          .get(path, { headers: this.headers }) as Subject<RestMessage<any>>;
      default:
        if (data == null) {
          throwError('POST without data');
        }
        return this.http
          .post(path, data, { headers: this.headers }) as Subject<RestMessage<any>>;
    }
  }
}
