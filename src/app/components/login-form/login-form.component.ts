import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output()
  loginEvent: EventEmitter<string> = new EventEmitter<string>();
  @Input()
  loginEventHandler;
  username: string;
  password: string;

  login() { this.loginEvent.emit(this.authenticationService.login(this.username, this. password)); }
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // this.loginEvent.addListener('loginEvent', this.loginEventHandler);
  }
}
