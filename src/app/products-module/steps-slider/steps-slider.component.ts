import { Component, AfterViewInit } from '@angular/core';
import { StepCardComponent } from '../step-card/step-card.component';
import { CommonModule } from '@angular/common';
import Splide from '@splidejs/splide';

interface Step {
  stepNumber: number;
  title: string;
  description: string;
  duration: string;
}

@Component({
  selector: 'app-steps-slider',
  templateUrl: './steps-slider.component.html',
  styleUrls: ['./steps-slider.component.scss'],
  standalone: true,
  imports: [StepCardComponent, CommonModule],
})
export class StepsSliderComponent implements AfterViewInit {
  steps: Step[] = [
    { stepNumber: 1, title: 'Diseña tu producto', description: 'Añade tu diseño a uno de nuestros productos premium.', duration: '25 minutos aprox.' },
    { stepNumber: 2, title: 'Conecta tu tienda', description: 'Conéctala fácilmente con Printful.', duration: '10 minutos aprox.' },
    { stepNumber: 3, title: 'Sube productos a tu tienda', description: 'Añade título, descripción y precio.', duration: '15 minutos aprox.' },
    { stepNumber: 4, title: 'Configura los pagos', description: 'Define cómo pagarás por los productos vendidos.', duration: '5 minutos aprox.' },
    { stepNumber: 5, title: 'Pide muestras', description: 'Verifica la calidad de tus productos.', duration: '5 minutos aprox.' }
  ];

  ngAfterViewInit() {
    new Splide('.splide', {
      type: 'loop',      // Hace que el slider sea un carrusel infinito
      perPage: 3,        // Cantidad de tarjetas visibles a la vez
      perMove: 1,        // Cuántas tarjetas se mueven en cada paso
      autoplay: true,    // Hace que el slider avance automáticamente
      interval: 3000,    // Tiempo entre cada auto-movimiento (en milisegundos)
      arrows: false,      // Muestra botones de siguiente/anterior
      pagination: false, // Oculta los "dots" de paginación
      breakpoints: {
        1024: { perPage: 2 },
        768: { perPage: 1 },
      }
    }).mount();
  }
}
