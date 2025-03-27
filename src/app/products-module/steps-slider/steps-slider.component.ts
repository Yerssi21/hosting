import { Component, AfterViewInit } from '@angular/core';
import { StepCardComponent } from '../step-card/step-card.component';
import { CommonModule } from '@angular/common';
import Splide from '@splidejs/splide';
import { SplideCarouselDirective } from '../../shared/directives/splide-carousel/splide-carousel.directive';

interface Step {
  stepNumber: number;
  title: string;
  description: string;
  duration: string;
  image?: string;
}

@Component({
  selector: 'app-steps-slider',
  templateUrl: './steps-slider.component.html',
  styleUrls: ['./steps-slider.component.scss'],
  standalone: true,
  imports: [CommonModule, SplideCarouselDirective],
})
export class StepsSliderComponent  {
  steps: Step[] = [
    { stepNumber: 1, title: 'Diseña tu producto', description: 'Añade tu diseño a uno de nuestros productos premium.', duration: '25 minutos aprox.', image: 'pasos/venta01.png' },
    { stepNumber: 2, title: 'Conecta tu tienda', description: 'Conéctala fácilmente.', duration: '10 minutos aprox.', image: 'pasos/venta02.png' },
    { stepNumber: 3, title: 'Sube productos a tu tienda', description: 'Añade título, descripción y precio.', duration: '15 minutos aprox.', image: 'pasos/venta03.png' },
    { stepNumber: 4, title: 'Configura los pagos', description: 'Define cómo pagarás por los productos vendidos.', duration: '5 minutos aprox.', image: 'pasos/venta04.png' },
    { stepNumber: 5, title: 'Pide muestras', description: 'Verifica la calidad de tus productos.', duration: '5 minutos aprox.', image: 'pasos/venta05.png' }
  ];

}
