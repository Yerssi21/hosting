import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplideCarouselDirective } from '../../shared/directives/splide-carousel/splide-carousel.directive';

@Component({
  selector: 'app-carrusel-incial',
  standalone: true,
  imports: [CommonModule, SplideCarouselDirective],
  templateUrl: './carrusel-incial.component.html',
  styleUrls: ['./carrusel-incial.component.scss'],
})
export class CarruselIncialComponent {
  products = [
    { img: 'carrusel/image1.png', bgColor: '#f79a05' },
    { img: 'carrusel/image2.png', bgColor: '#df55f2' }, 
    { img: 'carrusel/image3.png', bgColor: '#a3f143' },
    { img: 'carrusel/image4.png', bgColor: '#2fbce9' },
    { img: 'carrusel/image5.png', bgColor: '#f08bba' },
    { img: 'carrusel/image6.png', bgColor: '#8A90E2' },
    { img: 'carrusel/image7.png', bgColor: '#FF0266' },
  ];
}
