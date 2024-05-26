import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';

export const HOME_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];