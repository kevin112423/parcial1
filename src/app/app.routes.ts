import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
      },
      {
        path: 'users',
        title: 'Users',
        loadComponent: () => import('./pages/list-users/list-users.component'),
      },
      {
        path: 'users/:id',
        title: 'Users-Detail',
        loadComponent: () => import('./pages/detall-user/detall-user.component'),
      },
];
