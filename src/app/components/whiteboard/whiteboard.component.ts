import { Component, OnChanges, OnInit, SimpleChanges, SimpleChange } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { WhiteBoardHeadline, WhiteBoardColumn } from '../../model/whiteboard';
import { DeepStateGopherService } from 'src/app/deep-state-gopher.service';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css']
})
export class WhiteboardComponent implements OnInit, OnChanges {
  token = '';
  board = 0;
  headlines: WhiteBoardHeadline[] = [];
  columns: WhiteBoardColumn[] = [];
  registration = false;

  constructor(
    private authenticationService: AuthenticationService,
    private dataService: DataService,
    private deepStateGopher: DeepStateGopherService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      this.authenticationService.resetTimeout();
      break;
    }
  }

  ngOnInit() {
    this.headlines = this.dataService.getHeadLines();
    this.token = this.authenticationService.token;
    if (this.deepStateGopher.getRecord('boardIndex')) {
      this.board = this.deepStateGopher.getRecord('boardIndex');
      this.selectBoard(this.board);
    }
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
    this.deepStateGopher.setRecord('boardIndex', index);
    this.board = index;
    this.columns = this.dataService.getColumns(index);
  }
}
