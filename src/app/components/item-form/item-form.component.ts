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

  formatDate(date: Date): string {
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear()
  }

  submitted: boolean = false;
  now = new Date();
  board = 0;
  sections = null;
  sectionId = 0;
  title: string;
  detail: string;
  createdOn: string = this.formatDate(this.now);
  expiresOn: string = this.formatDate(new Date(this.now.setDate(this.now.getDate() + 1)));


  processColumns() {
    this.sections = [];
    let columns = this.dataService.getColumns(this.board);
    for (let x of columns) {
      for (let y of x.sections) {
        this.sections.push({ 'id': y.id, 'title': y.title });
      }
    }
  }

  submit() {
    if (this.submitted == true) return;
    if( this.sectionId == 0 ) return;

    let rawValue = {
      'boardId' : this.board,
      'sectionId' : this.sectionId,
      'title': this.title,
      'detail': this.detail,
      'createdOn': new Date(this.createdOn),
      'expiresOn': new Date(this.expiresOn)
    };
    this.dataService.createItem(rawValue);
  }

  constructor(private dataService: DataService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.board = params['board']);
    this.processColumns();
  }
}
