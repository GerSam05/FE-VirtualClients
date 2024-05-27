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

    const normalizedNombre = nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return clientes.filter(cliente => {
      const normalizedClienteNombre = cliente.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return normalizedClienteNombre.toLowerCase().includes(normalizedNombre.toLowerCase());
    });

    //return clientes.filter(cliente => cliente.nombre.toLowerCase().includes(nombre.toLowerCase()));
  }
}