/* import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ConfirmarEliminarService } from '../../../core/services/confirmar-eliminar.service';

@Component({
  selector: 'app-confirmar-eliminar',
  standalone: true,
  imports: [],
  templateUrl: './confirmar-eliminar.component.html',
  styleUrl: './confirmar-eliminar.component.css'
})
export class ConfirmarEliminarComponent {


  @Input() clienteId: number;

  constructor(private confirmationService: ConfirmarEliminarService) {}

  ngOnInit() {
    this.confirmationService.confirmation$.subscribe(id => {
      if (id) {
        this.clienteId = id;
        // Open the modal here (using a modal service is recommended)
      }
    });
  }

  eliminarCliente() {
    this.confirmationService.confirmDeletion();
  }

  cancelDeletion() {
    this.confirmationService.cancelDeletion();
  }
}
   */

  // eliminarPorId(id: number) {
  //   this._clientesService.deleteCliente(id).subscribe({
  //     next: (response) => {
  //       console.log(response);
  //       this.obtenerClientes();
  //     },  
  //     error: (e) => console.error('Unexpected Error:', e),
  //     complete: () => console.info('complete')
  //   });
  // }

// }