import { Component, OnInit, Input } from '@angular/core';
import { WhiteBoardItem } from '../../model/whiteboard';

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

  formatDate(date: Date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return month + '/' + day + '/' + year;
  }

  constructor() {}

  ngOnInit() {}
}
