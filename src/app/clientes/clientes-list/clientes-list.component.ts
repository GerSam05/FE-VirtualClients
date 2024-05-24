import { Component, OnInit, inject } from '@angular/core';
import { ApiResponseList } from '../../core/models/api-response-list';
import { ClientesService } from '../../core/services/clientes.service';
import { Cliente } from '../../core/models/cliente';
import { ErrorComponent } from '../../shared/components/error/error.component';
// import { ConfirmarEliminarComponent } from '../../shared/components/confirmar-eliminar/confirmar-eliminar.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConfirmarEliminarService } from '../../core/services/confirmar-eliminar.service';


@Component({
  selector: 'app-clientes-list',
  standalone: true,
  imports: [NgxPaginationModule, NgFor, RouterLink, ErrorComponent],
  templateUrl: './clientes-list.component.html',
  styleUrl: './clientes-list.component.css'
})
export class ClientesListComponent implements OnInit {
  constructor(private _clientesService: ClientesService,
                private confirmationService: ConfirmarEliminarService) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  apiResponseList: ApiResponseList | undefined;
  dataSource: Cliente[] = [];
  p: number = 1;
  idCliente: number = 0;

  obtenerClientes() {
    this._clientesService.getClientes().subscribe({
      next: (response) => {
        this.apiResponseList = response;
        if(this.apiResponseList.isSuccess){
          this.dataSource = this.apiResponseList.result;
        }else{
          console.log(response);
        }
      },  
      error: (e) => console.error('Unexpected Error:', e),
      complete: () => console.info('complete')
    });
  }

  setIdCliente(id: number): void {
    this.idCliente = id;
  }

  eliminarCliente(idCliente: number) {
    this._clientesService.deleteCliente(idCliente).subscribe({
      next: (response) => {
        console.log(response);
        this.obtenerClientes();
      },  
      error: (e) => console.error('Unexpected Error:', e),
      complete: () => console.info('complete')
    });
  }
}