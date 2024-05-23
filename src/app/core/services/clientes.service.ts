import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiResponseList } from '../models/api-response-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  constructor() { }

  private myApiUrl: string = 'https://localhost:7130/api/cliente/general/';

  http: HttpClient = inject(HttpClient);

  getAll(): Observable<ApiResponseList> {
    return this.http.get<ApiResponseList>(`${this.myApiUrl}`);
  }
}
