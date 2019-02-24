import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from './services/data.service';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'whiteboard';
  
  constructor( private dataService: DataService, private authenticationService: AuthenticationService) {
    
  }
  ngOnInit() {
    this.dataService.load();
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.authenticationService.resetTimeout();   
  }
}
