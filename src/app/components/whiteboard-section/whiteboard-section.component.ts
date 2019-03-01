import { Component, OnInit, Input } from '@angular/core';
import { WhiteBoardSection } from '../../model/whiteboard';

@Component({
  selector: 'app-whiteboard-section',
  templateUrl: './whiteboard-section.component.html',
  styleUrls: ['./whiteboard-section.component.css']
})
export class WhiteboardSectionComponent implements OnInit {
  @Input()
  section: WhiteBoardSection;

  showDetail = false;

  toggleDetail() {
    if (this.section.detail == null || this.section.detail == '') {
      return;
    }
    this.showDetail = !this.showDetail;
  }

  constructor() {}

  ngOnInit() {}
}
