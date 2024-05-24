import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiResponseList } from '../models/api-response-list';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  constructor() { }

  private myApiUrl: string = 'https://localhost:7130/api/cliente/';
  private myApiUrl2: string = 'https://localhost:7130/api/cliente/general/';

  http: HttpClient = inject(HttpClient);

  getAll(): Observable<ApiResponseList> {
    return this.http.get<ApiResponseList>(`${this.myApiUrl2}`);
  }

  postCliente(cliente: Cliente): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.myApiUrl}`, cliente);
  }

  deleteCliente(id: number): Observable<ApiResponse>{
    return this.http.delete<ApiResponse>(`${this.myApiUrl}${id}`);
  }
}
