import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  submitted = false;
  now = new Date();
  board = 0;
  sections = null;
  sectionId = 0;
  title: string;
  detail: string;
  expiresOn: string = this.formatDate(
    new Date(this.now.setDate(this.now.getDate() + 1))
  );

  formatDate(date: Date): string {
    return (
      date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
    );
  }

  processColumns() {
    this.sections = [];
    const columns = this.dataService.getColumns(this.board);
    for (const x of columns) {
      for (const y of x.sections) {
        this.sections.push({ id: y.id, title: y.title });
      }
    }
  }

  submit() {
    if (this.submitted == true) {
      return;
    }
    if (this.sectionId == 0) {
      return;
    }

    const rawValue = {
      boardId: this.board,
      sectionId: this.sectionId,
      title: this.title,
      detail: this.detail,
      expiresOn: new Date(this.expiresOn)
    };
    this.dataService.createItem(rawValue);
  }

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => (this.board = params['board'])
    );
    this.processColumns();
  }
}
