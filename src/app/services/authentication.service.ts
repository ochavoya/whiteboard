import { Injectable } from '@angular/core';
import { RestClientService } from './rest-client.service';
import { Observable } from 'rxjs';
import { RestMessage } from '../model/whiteboard';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public username = '';
  public token = '';

  logout() {
    this.token = '';
    this.restService.logout(this.username);
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
        console.log('AuthenticationService.register(): ' + response.data);
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

  login(username: string, password: string): Observable<RestMessage<string>> {

    console.log(username, password);
    const value = this.restService.login({
      username: username,
      password: password
    });
    value.subscribe(
      response => {
        console.log('AuthenticationService.login(): ' + response.data);
        if (response.success) {
          this.username = username;
          this.token = response.data;
        }
      },
      err =>
        console.log(
          `AuthenticationService.login() - Could not login user: ${username}`
        )
    );
    return value;
  }
}
