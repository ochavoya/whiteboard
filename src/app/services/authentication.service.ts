import { Injectable } from '@angular/core';
import { RestClientService } from './rest-client.service';
import { Observable } from 'rxjs';
import { RestMessage } from '../model/whiteboard';
import { take } from 'rxjs/operators';

const minutes = 5;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public username = '';
  public token = '';
  public timeout: any;

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
  ): void {
    const dto = { name: name, username: username, password: password };
    this.restService.register(dto).pipe(take(1)).subscribe(
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
  }

  private setTimeout() {
    this.timeout = setTimeout(() => {
      this.logout();
      document.location.href = 'home';
    }, minutes * 60000);
  }

  public resetTimeout() {
    if (this.timeout) {
      this.setTimeout();
    }
  }

  login(username: string, password: string): Observable<RestMessage<string>> {
    const value = this.restService.login({
      username: username,
      password: password
    });
    value.pipe(take(1)).subscribe(
      response => {
        if (response.success) {
          this.username = username;
          this.token = response.data;
          this.setTimeout();
        }
        else {
          console.log(`Bad username or password ${username}`);
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
