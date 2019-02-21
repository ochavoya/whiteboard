import { Component, OnInit, Input } from '@angular/core';
import { WhiteBoardItem } from '../../model/whiteboard';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

@Component({
  selector: 'app-whiteboard-item',
  template: `  
  <span (click)="toggleDetail()">{{ item.title }}</span>
  <div *ngIf="detailVisible">
    <span class="whiteboard-detail">{{ item.detail }}</span><br>
    <span class="whiteboard-detail-expires">expires on: {{ item.expiresOn | date: 'MM/dd/yyyy' }}</span>
  </div>`,
  styles: ['.whiteboard-detail{ font-size: small; }',
           '.whiteboard-detail-expires{ font-size: xx-small; color:red; }']
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
