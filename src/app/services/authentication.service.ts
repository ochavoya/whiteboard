import { Injectable } from '@angular/core';
import { RestClientService } from './rest-client.service';
import { Observable } from 'rxjs';
import { RestMessage } from '../model/whiteboard';


const minutes= 1;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public username = '';
  public token = '';
  public timeout:any;

  logout() {
    this.token = '';
    this.restService.logout(this.username);
    clearTimeout(this.timeout);
    this.timeout = null;
  }

  constructor(private restService: RestClientService) {}

  registerUser(
    name: string,
    username: string,
    password: string
  ): Observable<RestMessage<string>> {
    const dto = { name: name, username: username, password: password };
    const value = this.restService.register(dto);
    value.subscribe(
      response => {
        if (response.success) {
          this.login(username, password);
        }
      },
      err =>
        console.log(
          `AuthenticationService.register() - Error while registering user: ${username}`
        )
    );
    return value;
  }

  private setTimeout() {
    this.timeout = setTimeout(()=>{
      this.logout();
      document.location.href='home';
    }, minutes * 60000)
  }

  public resetTimeout() {
    if( this.timeout ) {
      this.setTimeout();
    }
  }

  login(username: string, password: string): Observable<RestMessage<string>> {
    const value = this.restService.login({
      username: username,
      password: password
    });
    value.subscribe(
      response => {
        if (response.success) {
          this.username = username;
          this.token = response.data;
          this.setTimeout();
        }
      },
      err =>
        console.log(
          `AuthenticationService.login() - Could not login user: ${username}\n ERROR: ${err}`
        )
    );
    return value;
  }
}
