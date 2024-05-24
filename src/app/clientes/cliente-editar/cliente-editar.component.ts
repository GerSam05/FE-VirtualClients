import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientesService } from '../../core/services/clientes.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Cliente } from '../../core/models/cliente';

@Component({
  selector: 'app-cliente-editar',
  standalone: true,
  imports: [ ReactiveFormsModule, RouterModule ],
  templateUrl: './cliente-editar.component.html',
  styleUrl: './cliente-editar.component.css'
})
export class ClienteEditarComponent implements OnInit {
  clienteFormulario: FormGroup;
  id!: number;

  constructor(private fb: FormBuilder, private _clientesService: ClientesService,
                private router: Router, private aRoute: ActivatedRoute) {
    this.clienteFormulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      estatus: ['', Validators.required]
    })
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.obtenerValores(this.id);
  }

  obtenerValores(id: number) {
    this._clientesService.getClienteToUpdate(id).subscribe(response => {
      this.clienteFormulario.setValue({
        nombre: response.result.nombre,
        apellido: response.result.apellido,
        estatus: response.result.estatus
      });
    })
  }

  modificarValores(){
    const cliente: Cliente = {
      id: this.id,
      nombre: this.clienteFormulario.value.nombre,
      apellido: this.clienteFormulario.value.apellido,
      estatus: this.clienteFormulario.value.estatus
    }
    this.editarCliente(this.id, cliente);
  }

  editarCliente(id: number, cliente: Cliente) {
    this._clientesService.putCliente(id, cliente).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/clientes']);
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