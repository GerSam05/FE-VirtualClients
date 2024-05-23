import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./clientes/clientes.routes').then(m => m.CLIENTES_ROUTES)
  },
  {
    path: 'condicion',
    loadChildren: () => import('./condicion/condicion.routes').then(m => m.CONDICION_ROUTES)
  }
];
