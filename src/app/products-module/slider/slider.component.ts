import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})


export class SliderComponent {
  testimonies = [
    {
      id: 1, 
      name: 'Alejandra Perez',
      course: 'LAURRVIC SHOP',
      review: 'Excelente calidad y precios accesibles. La ropa es tal cual en las fotos. ¡100% recomendados!',
      image: './images/face.jpg',
      description:'Cliente satisfecha'
    },
    {
      id: 2,
      name: 'Karen Arteaga',
      course: 'LAURRVIC SHOP',
      review: 'Hice mi pedido y llegó súper rápido. Me encantó la atención y el seguimiento. ¡Volveré a comprar!',
      image: './images/face2.jpg',
      description:'Compradora frecuente'
    },
    {
      id: 3,
      name: 'Jordan Alexander',
      course: 'LAURRVIC SHOP',
      review: 'Los productos son originales y a precios justos. Además, la tienda me ahorró el tiempo de esperar envíos largos.',
      image: './images/face3.jpg',
      description:'Comprador leal'
    },
    {
      id: 4,
      name: 'Kevin Ramirez',
      course: 'LAURRVIC SHOP',
      review: 'La ropa es hermosa y llegó en perfecto estado. ¡Muy buena opción si quieres comprar sin preocuparte por aduanas!',
      image: './images/face4.jpg',
      description:'Cliente satisfecho'
    },
    
  ];

  currentIndex = 0;

  changeTestimony(direction: number) {
    this.currentIndex = (this.currentIndex + direction + this.testimonies.length) % this.testimonies.length;
  }
  
}
