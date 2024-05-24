import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Cliente } from '../../core/models/cliente';
import { ClientesService } from '../../core/services/clientes.service';

@Component({
  selector: 'app-cliente-detalle',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './cliente-detalle.component.html',
  styleUrl: './cliente-detalle.component.css'
})
export class ClienteDetalleComponent implements OnInit {
  id: number;
  cliente!: Cliente;
  fechaActual: Date;

  constructor(private aRoute: ActivatedRoute, private _clientesService: ClientesService) {
    this.fechaActual = new Date;
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }
  
  ngOnInit(): void {
    this.obtenerCliente()
  }

  obtenerCliente() {
    this._clientesService.getCliente(this.id).subscribe({
      next: (response) => {
        console.log(response);
        this.cliente = response.result;
      },  
      error: (e) => console.error('Unexpected Error:', e),
      complete: () => console.info('complete')
    });
  }
}