import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  // Importa el módulo de enrutamiento
import { RouterModule } from '@angular/router';
import { SliderComponent } from './components/slider/slider.component';
import { CartComponent } from './products-module/cart/cart.component';
import { ProductListComponentComponent } from './products-module/product-list-component/product-list-component.component';
import { ProductCardComponentComponent } from './products-module/product-card-component/product-card-component.component';
import { StepCardComponent } from './products-module/step-card/step-card.component';
import { StepsSliderComponent } from './products-module/steps-slider/steps-slider.component';

@NgModule({
  declarations: [
    // Agrega tus componentes aquí (si no están en un módulo específico)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, 
    AppComponent,
    SliderComponent,
    CartComponent,
    ProductListComponentComponent,
    ProductCardComponentComponent,
    StepCardComponent,
    StepsSliderComponent

  ],
  providers: []
})
export class AppModule { }
