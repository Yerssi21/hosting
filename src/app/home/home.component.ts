import { Component } from '@angular/core';
import { CarruselIncialComponent } from "../products-module/carrusel-incial/carrusel-incial.component";
import { StepsSliderComponent } from "../products-module/steps-slider/steps-slider.component";
import { ServiciosComponent } from "../products-module/servicios/servicios.component";

@Component({
  selector: 'app-home',
  imports: [CarruselIncialComponent, StepsSliderComponent, ServiciosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
