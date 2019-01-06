import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  name: string;
  username: string;
  password: string;
  confirmPassword: string;

  register() {
    if (this.password == this.confirmPassword) {
      this.authenticationService.registerUser(this.name, this.username, this.password);
    }
  }

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

}
