import { Component, OnInit, Input } from '@angular/core';
import { WhiteBoardItem} from '../../model/whiteboard';

@Component({
  selector: 'app-whiteboard-item',
  templateUrl: './whiteboard-item.component.html',
  styleUrls: ['./whiteboard-item.component.css']
})
export class WhiteboardItemComponent implements OnInit {

  @Input()
  item: WhiteBoardItem;

  detailVisible = false;

  isActive(): boolean {
    return this.item.active = this.item.expiresOn > this.item.createdOn;
  }

  toggleDetail() {
    this.detailVisible = !this.detailVisible;
  }

  constructor() { }

  ngOnInit() {
  }
}
