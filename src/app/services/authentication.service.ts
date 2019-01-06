import { Injectable } from '@angular/core';
import { RestClientService } from './rest-client.service';
import { Observable } from 'rxjs';
import { RestMessage } from '../model/whiteboard';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public username: string = '';
  public token: string = '';

  logout() {
    this.token = '';
  }

  constructor(private restService: RestClientService) { }

  registerUser(name: string, username: string, password: string):
    Observable<RestMessage<string>> {
    let value = this.restService.register({ name: name, username: username, password: password });
    value.subscribe(response => {
      console.log('AuthenticationService.register(): ' + response.message);
      if (response.success)
        this.login(username, password);
    }, err => console.log( `AuthenticationService.register() - Error while registering user: ${username}` ));
    return value;
  }

  login(username: string, password: string): Observable<RestMessage<string>> {
    let value = this.restService.login({ username: username, password: password });
    value.subscribe(response => {
      console.log('AuthenticationService.login(): ' + response.message);
      if (response.success) {
        this.username = username;
        this.token = response.message;
      }
    }, err => console.log(`AuthenticationService.login() - Could not login user: ${username}`));
    return value;
  }
}
