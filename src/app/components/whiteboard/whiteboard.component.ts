import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DataService} from 'src/app/services/data.service';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {WhiteBoardHeadline, WhiteBoardColumn} from '../../model/whiteboard';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css']
})

export class WhiteboardComponent implements OnInit, OnChanges {
  token: string = '';
  board = 0;
  headlines: WhiteBoardHeadline[] = [];
  columns: WhiteBoardColumn[] = [];
  registration = false;

  constructor(
    private authenticationService: AuthenticationService,
    private dataService: DataService
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.authenticationService.resetTimeout();
  }

  ngOnInit() {
    this.headlines = this.dataService.getHeadLines();
    this.token = this.authenticationService.token;
  }

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

  selectBoard(index) {
    this.board = index;
    this.columns = this.dataService.getColumns(index);
  }
}
