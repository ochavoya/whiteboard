import { Injectable } from '@angular/core';
import { RestClientService } from './rest-client.service';
import { Configuration } from '../config';
import { Observable, fromEventPattern, of } from 'rxjs';
import { WhiteBoardItem, ItemDTO, WhiteBoardHeadline, WhiteBoardColumn, WhiteBoardSection } from '../model/whiteboard';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private restService: RestClientService, private authenticationService: AuthenticationService) { }

  getHeadLines(): WhiteBoardHeadline[] {
    return Configuration.headlines;
  }

  getItems(sectionId) {

    for(let column of Configuration.columns) {
      for(let section of column.sections) {
          if( section.id == sectionId) {
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

  createItem(rawValue): Observable<WhiteBoardItem> {
    console.log(rawValue);
    console.log('Creating item');
    let items = this.getItems(rawValue.sectionId);
    console.log(items);
    items.push({
      id : null,
      sectionId : rawValue.sectionId,
      user: this.authenticationService.username,
      title: rawValue.title,
      detail: rawValue.detail,
      createdOn: rawValue.createdOn,
      expiresOn: rawValue.expiresOn,
      active: true
    });
    console.log(items);

    return this.restService.create(this.createItemDTO(rawValue));
  }

  private createItemDTO(rawValue): ItemDTO {
    const result: ItemDTO = {
      token: this.authenticationService.username,
      sectionId: rawValue['sectionId'],
      title: rawValue['title'],
      detail: rawValue['detail'],
      createdOn: rawValue['createdOn'],
      expiresOn: rawValue['expiresOn']
    };
    return result;
  }
}
