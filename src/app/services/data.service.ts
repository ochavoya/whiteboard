import { Injectable } from '@angular/core';
import { RestClientService } from './rest-client.service';
import { Configuration } from '../config';
import { Observable, fromEventPattern, of } from 'rxjs';
import {
  WhiteBoardItem,
  ItemDTO,
  WhiteBoardHeadline,
  WhiteBoardColumn,
  WhiteBoardSection,
  RestMessage
} from '../model/whiteboard';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private restService: RestClientService,
    private authenticationService: AuthenticationService
  ) { }

  getHeadLines(): WhiteBoardHeadline[] {
    return Configuration.headlines;
  }

  getItems(sectionId) {
    for (const column of Configuration.columns) {
      for (const section of column.sections) {
        if (section.id == sectionId) {
          return section.items;
        }
      }
    }
    return null;
  }

  getColumns(index) {
    let result = Configuration.columns.slice();
    result = result.filter(x => x.whiteBoardId == index);
    return result;
  }

  createItem(rawValue) {

    this.getItems(rawValue.sectionId).push({
      boardId: rawValue.boardId,
      sectionId: rawValue.sectionId,
      title: rawValue.title,
      detail: rawValue.detail,
      expiresOn: rawValue.expiresOn
    });

    this.restService
      .create({ token: this.authenticationService.token, ...rawValue })
      .subscribe(result => console.log(result), error => console.log(error));
  }

  load() {
    this.restService.load().subscribe(
      result => {
        console.log("Items: " + result);
        let map = [];
        Configuration.columns
          .forEach(x => x.sections.map(y => map[y.id] = y));
        result.data.forEach(x => map[x.sectionId].push(x));
      }
      ,
      error => console.log('Could not load items from the database')
    );
  }
}
