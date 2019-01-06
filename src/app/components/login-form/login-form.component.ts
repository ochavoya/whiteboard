import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { RestMessage } from '../../model/whiteboard';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  @Output()
  loginEvent: EventEmitter<string> = new EventEmitter<string>();
  @Input()
  loginEventHandler;
  username: string;
  password: string;

  constructor(private authenticationService: AuthenticationService) { }

  login() {
    this.authenticationService.login(this.username, this.password)
      .subscribe(
        response => { if (response.success) this.loginEvent.emit(this.username); },
        error => console.log(`LoginFormComponent.login() - could not login: ${this.username}`)
      );
  }
}
