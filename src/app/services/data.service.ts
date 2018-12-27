import { Injectable } from '@angular/core';
import { RestClientService } from './rest-client.service';
import { Configuration } from '../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private restService: RestClientService) { }

  getHeadLines(): WhiteBoardHeadline[] {
    return Configuration.headlines;
  }

  getColumns(index) {
    let result = Configuration.columns.slice();
    result =  result.filter(x => x.whiteBoardId == index);
    return result;
  }

  scanColumns() {
    let result = {};
    for( let x of Configuration.columns) {
    }
  }

  createItem(rawValue): Observable<WhiteBoardItem> {
    return this.restService.create(this.createItemDTO(rawValue));
  }

  private createItemDTO(rawValue): ItemDTO {
    const result: ItemDTO = {
      sectionId: rawValue['sectionId'],
      title: rawValue['title'],
      detail: rawValue['detail'],
      createdOn: rawValue['createdOn'],
      expiresOn: rawValue['expiresOn']
    };
    return result;
  }
}
