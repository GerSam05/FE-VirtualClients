import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.routes').then(m => m.HOME_ROUTES)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.routes').then(m => m.CLIENTES_ROUTES)
  },
  {
    path: 'condicion',
    loadChildren: () => import('./condicion/condicion.routes').then(m => m.CONDICION_ROUTES)
  }
];