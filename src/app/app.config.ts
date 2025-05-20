import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { provideRouter, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent, // ahora este gestiona el layout general
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'productos',
        loadChildren: () =>
          import('./products-module/products.routes').then(m => m.routes)
      },
      {
        path: 'haz-tu-pedido',
        loadComponent: () =>
          import('./products-module/haz-tu-pedido/haz-tu-pedido.component').then(m => m.HazTuPedidoComponent),
      },
      
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent, // limpio, solo forms
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./auth/login/login.component').then(m => m.LoginComponent)
      },
      {
        path: 'registro',
        loadComponent: () =>
          import('./auth/register/register.component').then(m => m.RegisterComponent)
      },
      {
        path: 'recuperar',
        loadComponent: () =>
          import('./auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
      }
    ]
  },
  { path: '**', redirectTo: 'home' }
];

export const appConfig = [
  provideRouter(routes)
];