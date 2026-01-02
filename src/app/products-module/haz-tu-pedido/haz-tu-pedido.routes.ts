import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./intro/intro.component')
        .then(m => m.IntroComponent),
  },
  {
    path: 'subir-diseno',
    loadComponent: () =>
      import('./upload-design/upload-design.component')
        .then(m => m.UploadDesignComponent),
  },
  {
    path: 'productos',
    loadComponent: () =>
      import('./select-product/select-product.component')
        .then(m => m.SelectProductComponent),
  },
  {
    path: 'editor',
    loadComponent: () =>
      import('./product-editor/product-editor.component')
        .then(m => m.ProductEditorComponent),
  },
  {
    path: 'resumen',
    loadComponent: () =>
      import('./resumen/resumen.component')
        .then(m => m.ResumenComponent),
  },
  {
    path: 'carrito',
    loadComponent: () =>
      import('./carrito/carrito.component')
        .then(m => m.CarritoComponent),
  },
];
