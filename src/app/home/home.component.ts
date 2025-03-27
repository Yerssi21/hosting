import { Component } from '@angular/core';
import { CarruselIncialComponent } from "../products-module/carrusel-incial/carrusel-incial.component";
import { StepsSliderComponent } from "../products-module/steps-slider/steps-slider.component";
import { ServiciosComponent } from "../products-module/servicios/servicios.component";
import { HeroSectionComponent } from "../products-module/hero-section/hero-section.component";
import { EffortlessProductionComponent } from "../products-module/effortless-production/effortless-production.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CarruselIncialComponent, StepsSliderComponent, HeroSectionComponent, EffortlessProductionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
