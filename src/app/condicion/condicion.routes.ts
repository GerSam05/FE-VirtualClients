import { Routes } from '@angular/router';
import { CondicionListComponent } from './condicion-list/condicion-list.component';

export const CONDICION_ROUTES: Routes = [
  { path: 'condicion', component: CondicionListComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];