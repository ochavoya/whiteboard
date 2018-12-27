import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css']
})

export class WhiteboardComponent implements OnInit {
  board = 0;
  headlines: WhiteBoardHeadline[] = [];
  columns: WhiteBoardColumn[] = [];

  getCreatePath() {
    let path = [`create/${this.board}`]
    return path;
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.headlines = this.dataService.getHeadLines();
  }

  selectBoard(index) {
    this.board = index;
    this.columns = this.dataService.getColumns(index);
  }
}
