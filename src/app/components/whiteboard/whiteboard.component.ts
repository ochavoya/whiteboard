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
  token;
  board = 0;
  headlines: WhiteBoardHeadline[] = [];
  columns: WhiteBoardColumn[] = [];

  setToken(token) {
    this.token = token;
  }

  logout() {
    this.token = null;
    this.authenticationService.logout();
  }

  getCreatePath() {
    const path = [`create/${this.board}`];
    return path;
  }

  constructor(
    private authenticationService: AuthenticationService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.headlines = this.dataService.getHeadLines();
    this.token = this.authenticationService.username;
  }

  selectBoard(index) {
    this.board = index;
    this.columns = this.dataService.getColumns(index);
    console.log(this.columns);
  }
}
