import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcercaComponent } from './products-module/acerca/acerca.component';
import { OfertasComponent } from './products-module/ofertas/ofertas.component';
import { ProductListComponentComponent } from './products-module/product-list-component/product-list-component.component';
import { ServiciosComponent } from './products-module/servicios/servicios.component';
import { SliderComponent } from './components/slider/slider.component';
import { FormularioContactoComponent } from './products-module/formulario-contacto/formulario-contacto.component';

export const routes: Routes = [  
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirección al inicio
    { path: 'home', component: HomeComponent },
    { path: 'acerca', component: AcercaComponent },
    { path: 'ofertas', component: OfertasComponent },
    { path: 'productos', component: ProductListComponentComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'testimonios', component: SliderComponent },
    { path: 'contacto', component: FormularioContactoComponent },
    { path: '**', redirectTo: 'home' } // Redirección si la ruta no existe
  ];