import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss'],
})
export class ResumenComponent {
  // Datos mock – luego los sustituiremos por datos reales del carrito
  items = [
    {
      name: 'Camiseta premium unisex',
      variant: 'Blanco',
      size: 'M',
      quantity: 10,
      unitPrice: 10.9,
    },
    {
      name: 'Sudadera capucha',
      variant: 'Negro',
      size: 'L',
      quantity: 5,
      unitPrice: 24.5,
    },
  ];

  get subtotal(): number {
    return this.items.reduce(
      (acc, item) => acc + item.unitPrice * item.quantity,
      0
    );
  }

  get shipping(): number {
    return 12.9;
  }

  get taxes(): number {
    return this.subtotal * 0.21; // 21% ficticio
  }

  get total(): number {
    return this.subtotal + this.shipping + this.taxes;
  }
}
