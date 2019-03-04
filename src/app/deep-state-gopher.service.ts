import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeepStateGopherService {

  private records = {};

  public setRecord(name: string, value: any): void {
    this.records[name] = value;
  }

  public getRecord(name: string): any {
    return this.records[name];
  }

  constructor() { }
}
