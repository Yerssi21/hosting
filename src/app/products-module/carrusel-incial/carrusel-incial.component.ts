import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-carrusel-incial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel-incial.component.html',
  styleUrl: './carrusel-incial.component.scss'
})
export class CarruselIncialComponent implements AfterViewInit {
  @ViewChild('imageSlider') slider!: ElementRef;

  ngAfterViewInit() {
    new Splide(this.slider.nativeElement, {
      type: 'loop', // Hace que el carrusel sea infinito
      perPage: 5, // Número de imágenes visibles a la vez
      perMove: 1, // Cuántas imágenes se mueven en cada paso
      autoplay: true, // Activar el autoplay
      interval: 3000, // Tiempo entre cada slide
      pagination: false, // Ocultar los puntos de navegación
      arrows: false, // Mostrar flechas de navegación
      gap: '1rem', // Espacio entre slides
      rewind: true, // Hace que el carrusel rebote al final
      breakpoints: {
        1000: { perPage: 3 }, // Tablets grandes (1024px o menos)
        750: { perPage: 2 },  // Tablets pequeñas y móviles grandes (768px o menos)
        200: { perPage: 1 }  // Teléfonos móviles pequeños (480px o menos)
      }

    }).mount();
  }


  products = [
    { img: 'carrusel/image1.jpg', bgColor: '#f79a05' },
    { img: 'carrusel/image2.jpg', bgColor: '#df55f2' },
    { img: 'carrusel/image3.jpg', bgColor: '#a3f143' },
    { img: 'carrusel/image4.jpg', bgColor: '#2fbce9' },
    { img: 'carrusel/image5.jpg', bgColor: '#f08bba' },
    { img: 'carrusel/image6.jpg', bgColor: '#8A90E2' },
    { img: 'carrusel/image7.jpg', bgColor: '#FF0266' },
    // { img: 'carrusel/image8.jpg', bgColor: '#4A90E2' },
    // { img: 'carrusel/image9.jpg', bgColor: '#4A90E2' },
    // { img: 'carrusel/image10.jpg', bgColor: '#4A90E2' }
  ];  
}

