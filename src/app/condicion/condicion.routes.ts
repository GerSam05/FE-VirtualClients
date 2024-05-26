import { Routes } from '@angular/router';
import { CondicionListComponent } from './condicion-list/condicion-list.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';

export const CONDICION_ROUTES: Routes = [
  { path: '', component: CondicionListComponent },
  { path: '**', component: NotFoundComponent }
];