import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NombreFilterPipe',
  standalone: true
})
export class NombreFilterPipe implements PipeTransform {

  transform(clientes: any[], nombre: string): any[] {
    if (!clientes || !nombre) {
      return clientes;
    }

    return clientes.filter(cliente => cliente.nombre.toLowerCase().includes(nombre.toLowerCase()));
  }
}