import { Injectable } from '@angular/core';
import { RestClientService } from './rest-client.service';
import { LoginDTO, RegistrationDTO, LoginResponse } from '../model/whiteboard';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _username = null;
  private _authenticated = false;

  get username() {
    if (this._authenticated) {
      return this._username;
    }
    return null;
  }

  logout() {
    this._username = null;
    this._authenticated = false;
  }

  constructor(private restService: RestClientService) {}
  registerUser(username: string, password: string, email: string) {}
  register(registerDTO: RegistrationDTO) {
    return true;
  }

  login(username: string, password: string): string {
    if (username === 'root') {
      this._username = 'root';
      this._authenticated = true;
      return 'root';
    }
    this._username = null;
    this._authenticated = false;
    return null;
  }
}
