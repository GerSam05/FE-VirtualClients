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
  private myApiUrl2: string = 'https://localhost:7130/api/cliente/tabla/';

  http: HttpClient = inject(HttpClient);

  getClientes(): Observable<ApiResponseList> {
    return this.http.get<ApiResponseList>(`${this.myApiUrl2}`);
  }

  getCliente(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.myApiUrl2}${id}`);
  }

  getClienteToUpdate(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.myApiUrl}${id}`);
  }

  postCliente(cliente: Cliente): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.myApiUrl}`, cliente);
  }

  putCliente(id: number, cliente: Cliente): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.myApiUrl}${id}`, cliente);
  }

  deleteCliente(id: number): Observable<ApiResponse>{
    return this.http.delete<ApiResponse>(`${this.myApiUrl}${id}`);
  }
}
