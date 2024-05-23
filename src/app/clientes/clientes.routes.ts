import { Routes } from '@angular/router';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClienteDetalleComponent } from './cliente-detalle/cliente-detalle.component';
import { ClienteAgregarComponent } from './cliente-agregar/cliente-agregar.component';
import { ClienteEditarComponent } from './cliente-editar/cliente-editar.component';

export const CLIENTES_ROUTES: Routes = [
  { path: 'clientes', component: ClientesListComponent },
  { path: 'detalle/:id', component: ClienteDetalleComponent },
  { path: 'agregar', component: ClienteAgregarComponent },
  { path: 'editar/:id', component: ClienteEditarComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];