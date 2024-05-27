import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

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
  },
  {
    path: '**', component: NotFoundComponent
  }
];