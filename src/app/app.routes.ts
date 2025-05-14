import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];


