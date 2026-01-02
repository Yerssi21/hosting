import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface CartItem {
  name: string;
  variant: string;
  size: string;
  quantity: number;
  unitPrice: number;
  image: string;
}

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent {
  items: CartItem[] = [
    {
      name: 'Camiseta premium unisex',
      variant: 'Blanco',
      size: 'M',
      quantity: 10,
      unitPrice: 10.9,
      image: '/images/mock-tshirt.jpg',
    },
    {
      name: 'Sudadera capucha',
      variant: 'Negro',
      size: 'L',
      quantity: 5,
      unitPrice: 24.5,
      image: '/images/mock-hoodie.jpg',
    },
  ];

  get subtotal(): number {
    return this.items.reduce(
      (acc, item) => acc + item.unitPrice * item.quantity,
      0
    );
  }

  get shipping(): number {
    return 12.9; // mock
  }

  get total(): number {
    return this.subtotal + this.shipping;
  }
}
