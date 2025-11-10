// src/app/products-module/products.routes.ts
import { Routes } from '@angular/router';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { CartComponent } from './cart/cart.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { EffortlessProductionComponent } from './effortless-production/effortless-production.component';
import { QuestionsCommonComponent } from './questions-common/questions-common.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';

export const routes: Routes = [
  { path: '',          title: 'Productos | Laurrvic Shop',            component: ProductListComponentComponent },
  { path: 'carrito',   title: 'Carrito | Laurrvic Shop',              component: CartComponent },
  { path: 'ofertas',   title: 'Ofertas | Laurrvic Shop',              component: OfertasComponent },
  { path: 'servicios', title: 'Servicios | Laurrvic Shop',            component: ServiciosComponent },
  { path: 'hero',      title: 'Inicio Hero | Laurrvic Shop',          component: HeroSectionComponent },
  { path: 'produccion',title: 'Producción | Laurrvic Shop',           component: EffortlessProductionComponent },
  { path: 'preguntas', title: 'Preguntas Frecuentes | Laurrvic Shop', component: QuestionsCommonComponent },
  { path: 'contacto',  title: 'Contacto | Laurrvic Shop',             component: FormularioContactoComponent },
];
