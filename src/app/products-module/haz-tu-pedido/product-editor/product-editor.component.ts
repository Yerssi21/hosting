import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ProductVariant {
  name: string;
  value: string;
  bg: string; // color del swatch
}

interface SizeOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-product-editor',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss'],
})
export class ProductEditorComponent {
  variants: ProductVariant[] = [
    { name: 'Blanco', value: 'white', bg: '#f9fafb' },
    { name: 'Negro', value: 'black', bg: '#020617' },
    { name: 'Azul marino', value: 'navy', bg: '#0f172a' },
  ];

  sizes: SizeOption[] = [
    { label: 'S', value: 'S' },
    { label: 'M', value: 'M' },
    { label: 'L', value: 'L' },
    { label: 'XL', value: 'XL' },
  ];

  selectedVariant = this.variants[0];
  selectedSize = this.sizes[1]; // M
  quantity = 10;

  get unitPrice(): number {
    return 10.9; // mock
  }

  get totalPrice(): number {
    return this.unitPrice * this.quantity;
  }

  selectVariant(variant: ProductVariant) {
    this.selectedVariant = variant;
  }

  selectSize(size: SizeOption) {
    this.selectedSize = size;
  }

  updateQuantity(delta: number) {
    const next = this.quantity + delta;
    if (next < 1) return;
    this.quantity = next;
  }
}
