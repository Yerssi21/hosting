import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  images: string[] = [
    'images/photo1.avif', 'images/photo2.avif', 'images/photo3.avif',
    'images/photo4.avif', 'images/photo5.avif', 'images/photo6.avif',
    'images/photo7.avif', 'images/photo8.avif', 'images/photo9.avif',
    'images/photo10.avif', 'images/photo11.avif', 'images/photo12.avif',
    'images/photo13.avif', 'images/photo14.avif', 'images/photo15.avif',
    'images/photo16.avif', 'images/photo17.avif', 'images/photo18.avif'
  ];

  // Dividimos el array en dos partes
  firstRowImages: string[] = this.images.slice(0, 6);
  secondRowImages: string[] = this.images.slice(6, 12);
  threeRowImages: string[] = this.images.slice(12, 18);
}
