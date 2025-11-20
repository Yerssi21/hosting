// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
  /* =========================
     LAYOUT PRINCIPAL (navbar + hero + footer)
     ========================= */
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      // 🔁 Redirect raíz → /home
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      {
        path: 'home',
        title: 'Inicio | Laurrvic Shop',
        data: { hero: 'home', heroAnim: 'fadezoom' },
        loadComponent: () =>
          import('./features/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },

      {
        path: 'venta-online',
        title: 'Venta en línea | Laurrvic Shop',
        data: { hero: 'venta', heroAnim: 'float' },
        loadComponent: () =>
          import('./products-module/venta-online/venta-online.component').then(
            (m) => m.VentaOnlineComponent
          ),
      },

      {
        path: 'haz-tu-pedido',
        title: 'Haz tu pedido | Laurrvic Shop',
        data: { hero: 'pedido', heroAnim: 'zoom' },
        loadComponent: () =>
          import(
            './products-module/haz-tu-pedido/haz-tu-pedido.component'
          ).then((m) => m.HazTuPedidoComponent),
      },

      {
        path: 'soporte-empresarial',
        title: 'Soporte empresarial | Laurrvic Shop',
        data: { hero: 'soporte', heroAnim: 'fadezoom' },
        loadComponent: () =>
          import(
            './products-module/soporte-empresarial/soporte-empresarial.component'
          ).then((m) => m.SoporteEmpresarialComponent),
      },

      {
        path: 'area-cliente',
        title: 'Área cliente | Laurrvic Shop',
        data: { hero: 'cliente', heroAnim: 'float' },
        loadComponent: () =>
          import(
            './products-module/area-cliente/area-cliente.component'
          ).then((m) => m.AreaClienteComponent),
      },
      {
        path: 'area-cliente/panel',
        title: 'Panel cliente | Laurrvic Shop',
        data: { hero: 'cliente', heroAnim: 'none' }, // o 'none' si no quieres hero aquí
        loadComponent: () =>
          import('./products-module/client-dashboard/client-dashboard.component')
            .then(m => m.ClientDashboardComponent),
      },

      {
        path: 'about',
        title: 'Acerca de | Laurrvic Shop',
        // puedes usar hero: 'home' para reutilizar el mismo hero
        // o hero: 'none' si quieres página sin hero
        data: { hero: 'home', heroAnim: '' },
        loadComponent: () =>
          import('./features/about/about.component').then(
            (m) => m.AboutComponent
          ),
      },

      {
        path: 'productos',
        title: 'Productos | Laurrvic Shop',
        // 👇 sin hero para todo el módulo de productos
        data: { hero: 'none', heroAnim: '' },
        loadChildren: () =>
          import('./products-module/products.routes').then(
            (m) => m.routes
          ),
      },
    ],
  },

  /* =========================
     LAYOUT AUTH (login / registro)
     – suele ir sin hero y sin navbar normal
     ========================= */
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./auth/auth.routes').then((m) => m.routes),
      },
    ],
  },

  // 🔚 Cualquier ruta desconocida → home
  { path: '**', redirectTo: 'home' },
];
