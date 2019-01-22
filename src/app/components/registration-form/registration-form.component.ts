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
      const dto = {
        name: this.name,
        username: this.username,
        password: this.password
      };
      console.log(
        'register() - ' + dto.name + ' : ' + dto.username + ' : ' + dto.password
      );
      this.authenticationService.registerUser(
        this.name,
        this.username,
        this.password
      );
    }
  }

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {}
}
