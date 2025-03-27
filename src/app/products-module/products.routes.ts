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
  {
    path: '',
    component: ProductListComponentComponent
  },
  {
    path: 'carrito',
    component: CartComponent
  },
  {
    path: 'ofertas',
    component: OfertasComponent
  },
  {
    path: 'servicios',
    component: ServiciosComponent
  },
  {
    path: 'hero',
    component: HeroSectionComponent
  },
  {
    path: 'produccion',
    component: EffortlessProductionComponent
  },
  {
    path: 'preguntas',
    component: QuestionsCommonComponent
  },
  {
    path: 'contacto',
    component: FormularioContactoComponent
  }
];
