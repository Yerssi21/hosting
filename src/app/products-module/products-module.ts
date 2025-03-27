import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcercaComponent } from './acerca/acerca.component';
import { CarruselIncialComponent } from './carrusel-incial/carrusel-incial.component';
import { CartComponent } from './cart/cart.component';
import { EffortlessProductionComponent } from './effortless-production/effortless-production.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { ProductCardComponentComponent } from './product-card-component/product-card-component.component';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { StepCardComponent } from './step-card/step-card.component';
import { StepsSliderComponent } from './steps-slider/steps-slider.component';
import { QuestionsCommonComponent } from './questions-common/questions-common.component';
import { SliderComponent } from './slider/slider.component';



@NgModule({
  imports: [
    CommonModule,
    AcercaComponent,
    CarruselIncialComponent,
    CartComponent,
    EffortlessProductionComponent,
    FooterComponentComponent,
    FormularioContactoComponent,
    HeroSectionComponent,
    NavbarComponentComponent,
    OfertasComponent,
    ProductCardComponentComponent,
    ProductListComponentComponent,
    ServiciosComponent,
    StepCardComponent,
    StepsSliderComponent,
    QuestionsCommonComponent,
    SliderComponent
  ]
})
export class ProductsModule { }
