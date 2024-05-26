import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private textFilter: string = '';
  private _filter: BehaviorSubject<string>;

  constructor() { 
    this._filter = new BehaviorSubject<string>('');
  }

  setText(letter: string) {
    this.textFilter = letter;
    this._filter.next(this.textFilter);
  }

  get filter() {
    return this._filter.asObservable();
  }
}
