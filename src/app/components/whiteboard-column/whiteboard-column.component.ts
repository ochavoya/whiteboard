import { Component, OnInit, Input } from '@angular/core';
import { WhiteBoardColumn } from '../../model/whiteboard';

@Component({
  selector: 'app-whiteboard-column',
  templateUrl: './whiteboard-column.component.html',
  styleUrls: ['./whiteboard-column.component.css']
})
export class WhiteboardColumnComponent implements OnInit {
  @Input()
  column: WhiteBoardColumn;

  showDetail = false;

  toggleDetail() {
    if (this.column.detail == null || this.column.detail === '') { return; }
    this.showDetail = !this.showDetail;
  }

  constructor() {}

  ngOnInit() {}
}
