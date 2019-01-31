import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { WhiteBoardHeadline, WhiteBoardColumn } from '../../model/whiteboard';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css']
})

export class WhiteboardComponent implements OnInit {
  token: string = '';
  board = 0;
  headlines: WhiteBoardHeadline[] = [];
  columns: WhiteBoardColumn[] = [];
  registration = false;

  setToken(token) {
    this.token = token;
  }

  showRegistrationForm() {
    this.registration = !this.registration;
  }

  logout() {
    this.token = '';
    this.authenticationService.logout();
  }

  getCreatePath() {
    const path = [`create/${this.board}`];
    return path;
  }

  constructor(
    private authenticationService: AuthenticationService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.headlines = this.dataService.getHeadLines();
    this.token = this.authenticationService.token;
    
  }

  selectBoard(index) {
    this.board = index;
    this.columns = this.dataService.getColumns(index);
  }
}
