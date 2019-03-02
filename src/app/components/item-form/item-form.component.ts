import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import DateTimeFormat = Intl.DateTimeFormat;

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  itemFormGroup: FormGroup;
  board = 0;
  sections = null;
  sectionId = 0;
  title: string;
  detail: string;
  expiresOn: Date;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private formGroupCreator: FormBuilder
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => (this.board = params['board'])
    );

    this.processColumns();

    const required = Validators.required;

    this.itemFormGroup = this.formGroupCreator.group({
      boardId: [this.board],
      sectionId: [0, required],
      title: ['', required],
      detail: ['', required],
      expiresOn: [ new Date(), required]
    });
  }

  submit() {
    const rawValue = {
      boardId: this.itemFormGroup.get('boardId').value,
      sectionId: this.itemFormGroup.get('sectionId').value,
      title: this.itemFormGroup.get('title').value,
      detail: this.itemFormGroup.get('detail').value,
      expiresOn: this.itemFormGroup.get('expiresOn').value
    };

    this.dataService.createItem(rawValue);
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
}
