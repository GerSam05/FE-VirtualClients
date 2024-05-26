import { Component, OnInit } from '@angular/core';
import { ApiResponseList } from '../../core/models/api-response-list';
import { ClientesService } from '../../core/services/clientes.service';
import { Cliente } from '../../core/models/cliente';
import { FilterService } from '../../core/services/filter.service';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NombreFilterPipe } from '../../shared/pipes/nombre-filter.pipe';

@Component({
  selector: 'app-clientes-list',
  standalone: true,
  imports: [ NgxPaginationModule, NgFor, RouterLink, NombreFilterPipe ],
  templateUrl: './clientes-list.component.html',
  styleUrl: './clientes-list.component.css'
})
export class ClientesListComponent implements OnInit {
  constructor(private _clientesService: ClientesService,
              private _filterService: FilterService) { }

  ngOnInit(): void {
    this.obtenerClientes();
    this._filterService.filter.subscribe(filter => this.nombreFiltro = filter);
  }

  idCliente: number = 0;
  apiResponseList: ApiResponseList | undefined;
  dataSource: Cliente[] = [];
  nombreFiltro: string ='';
  p: number = 1;

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