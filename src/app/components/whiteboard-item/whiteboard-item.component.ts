import { Component, OnInit, Input } from '@angular/core';
import { WhiteBoardItem } from '../../model/whiteboard';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

@Component({
  selector: 'app-whiteboard-item',
  templateUrl: './whiteboard-item.component.html',
  styleUrls: ['./whiteboard-item.component.css']
})
export class WhiteboardItemComponent implements OnInit {
  @Input()
  item: WhiteBoardItem;

  detailVisible = false;


  toggleDetail() {
    this.detailVisible = !this.detailVisible;
  }

  constructor() {}

  ngOnInit() {}
}
