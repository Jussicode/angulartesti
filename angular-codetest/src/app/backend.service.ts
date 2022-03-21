import { Injectable } from '@angular/core';
import { DataItem } from './data-item';
import { IDataItem } from './idata-item';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private data : IDataItem[] = []

  constructor() { }

  insert(label: string, value: number, length: number,height: number) {
    this.data.push(new DataItem(label, value, length, height))
  }
  add(item : IDataItem) {
    this.data.push(item);
    console.log('pushing ', item.label)
  }

  getMinimunValue() {return 123 }
  getItems() { return this.data}
  reset() {this.data = []}

}
