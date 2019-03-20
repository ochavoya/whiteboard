import { Injectable } from '@angular/core';
import { RestClientService } from './rest-client.service';
import { Configuration } from '../config';
import { WhiteBoardItem, WhiteBoardHeadline } from '../model/whiteboard';
import { AuthenticationService } from './authentication.service';
import { take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private restService: RestClientService,
    private authenticationService: AuthenticationService
  ) {}

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
      .pipe(take(1))
      .subscribe(result => console.log(result), error => console.log(error));
  }

  load() {
    this.restService.load()
    .pipe(take(1))
    .subscribe(
      result => {
        const map: WhiteBoardItem[][] = [];
        Configuration.columns.forEach(x =>
          x.sections.forEach(y => (map[y.id] = y.items))
        );
        result.data.forEach(x =>
          map[x.sectionId].push({
            boardId: x.boardId,
            sectionId: x.sectionId,
            title: x.title,
            detail: x.detail,
            expiresOn: x.expiresOn
          })
        );
      },
      error => console.log('Could not load items from the database')
    );
  }
}
