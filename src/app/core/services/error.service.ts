import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  
  constructor() { }
  error: boolean = false;

  mostrarError() {
    this.error = true;
  }
}
