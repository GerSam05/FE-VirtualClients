import { Component, OnInit } from '@angular/core';
import { ApiResponseList } from '../../core/models/api-response-list';
import { ClientesService } from '../../core/services/clientes.service';
import { Cliente } from '../../core/models/cliente';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clientes-list',
  standalone: true,
  imports: [NgxPaginationModule, NgFor, RouterLink],
  templateUrl: './clientes-list.component.html',
  styleUrl: './clientes-list.component.css'
})
export class ClientesListComponent implements OnInit {
  constructor(private _clientesService: ClientesService) { }
  ngOnInit(): void {
    this.obtenerClientes();
  }
  apiResponseList: ApiResponseList | undefined;
  dataSource: Cliente[] = [];
  p: number = 1;

  obtenerClientes() {
    this._clientesService.getAll().subscribe({
      next: (response) => {
        this.apiResponseList = response;
        if(this.apiResponseList.isSuccess){

          this.dataSource = this.apiResponseList.result;
          console.log(this.dataSource);
        }else{
          alert('Upps.. Ha habido un error interno del servidor!');
          console.log(response);
        }
    },  
    error: (e) => console.error('Unexpected Error:', e),
    complete: () => console.info('complete')
    })
  }

  eliminarCliente(id: number) {
    console.log('eliminar Cliente');
  }
}
