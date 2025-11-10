// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // 👈 NECESARIO
      {
        path: 'home',
        title: 'Inicio | Laurrvic Shop',
        data: { hero: 'home' , heroAnim: 'fadezoom'  },
        loadComponent: () =>
          import('./features/home/home.component').then(m => m.HomeComponent),
      },

      {
        path: 'venta-online',
        title: 'Venta en línea | Laurrvic Shop',
        data: { hero: 'venta', heroAnim: 'float' },
        loadComponent: () =>
          import('./products-module/venta-online/venta-online.component')
            .then(m => m.VentaOnlineComponent),
      },

      {
        path: 'haz-tu-pedido',
        title: 'Haz tu pedido | Laurrvic Shop',
        data: { hero: 'pedido', heroAnim: 'zoom' },    // ✅ faltaba
        loadComponent: () =>
          import('./products-module/haz-tu-pedido/haz-tu-pedido.component')
            .then(m => m.HazTuPedidoComponent),
      },

      {
        path: 'soporte-empresarial',
        title: 'Soporte empresarial | Laurrvic Shop',
        data: { hero: 'soporte' , heroAnim: 'fadezoom' },   // ✅ faltaba
        loadComponent: () =>
          import('./products-module/soporte-empresarial/soporte-empresarial.component')
            .then(m => m.SoporteEmpresarialComponent),
      },

      {
        path: 'area-cliente',
        title: 'Área cliente | Laurrvic Shop',
        data: { hero: 'cliente', heroAnim: 'float' },   // ✅ faltaba
        loadComponent: () =>
          import('./products-module/area-cliente/area-cliente.component')
            .then(m => m.AreaClienteComponent),
      },

      {
        path: 'about',
        title: 'Acerca de | Laurrvic Shop',
        data: { hero: 'home' , heroAnim: '' }, // o 'none' o una variante si quieres
        loadComponent: () =>
          import('./features/about/about.component').then(m => m.AboutComponent),
      },

      // Si NO quieres hero en /productos y sus hijos, márcalo aquí:
      {
        path: 'productos',
        title: 'Productos | Laurrvic Shop',
        data: { hero: 'none' , heroAnim: '' },  // ✅ oculta hero en toda la sección productos
        loadChildren: () =>
          import('./products-module/products.routes').then(m => m.routes),
      },

      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },

  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./auth/auth.routes').then(m => m.routes),
      },
    ],
  },

  { path: '**', redirectTo: 'home' },
];
