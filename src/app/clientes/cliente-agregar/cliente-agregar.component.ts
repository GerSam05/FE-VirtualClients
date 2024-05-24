import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cliente } from '../../core/models/cliente';
import { ClientesService } from '../../core/services/clientes.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cliente-agregar',
  standalone: true,
  imports: [ ReactiveFormsModule, RouterModule ],
  templateUrl: './cliente-agregar.component.html',
  styleUrl: './cliente-agregar.component.css'
})
export class ClienteAgregarComponent {
  clienteFormulario: FormGroup;

  constructor(private fb: FormBuilder, private _clientesService: ClientesService, private router: Router) {
    this.clienteFormulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      estatus: ['', Validators.required]
    })
  }

  obtenerValores() {
    const cliente: Cliente = {
      nombre: this.clienteFormulario.value.nombre,
      apellido: this.clienteFormulario.value.apellido,
      estatus: this.clienteFormulario.value.estatus
    }
    this.aggCliente(cliente);
  }

  aggCliente(cliente: Cliente) {
    this._clientesService.postCliente(cliente).subscribe({
      next: (response) => {
        console.log(response);
        this.clienteFormulario.reset();
      },  
      error: (e) => console.error('Unexpected Error:', e),
      complete: () => console.info('complete')
    });
  }

  preventFormSubmit(event: MouseEvent): void {
    event.preventDefault();
    this.router.navigate(['/clientes']);
  }
}
