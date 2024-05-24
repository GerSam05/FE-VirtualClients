import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmarEliminarService {
  
  private confirmationSubject = new BehaviorSubject<number | null>(null);
  confirmation$ = this.confirmationSubject.asObservable();

  showConfirmDelete(id: number) {
    this.confirmationSubject.next(id);
  }

  confirmDeletion() {
    // Implement deletion logic here
    console.log('Confirmado para eliminar con ID:', this.confirmationSubject.getValue());
    this.confirmationSubject.next(null); // Reset confirmation
  }

  cancelDeletion() {
    this.confirmationSubject.next(null);
  }
}
