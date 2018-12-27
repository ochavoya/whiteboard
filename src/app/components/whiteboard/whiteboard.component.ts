import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css']
})
export class WhiteboardComponent implements OnInit {
  username;
  board = 0;
  headlines: WhiteBoardHeadline[] = [];
  columns: WhiteBoardColumn[] = [];

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
    this.username = this.authenticationService.username;
  }

  selectBoard(index) {
    this.board = index;
    this.columns = this.dataService.getColumns(index);
  }
}
