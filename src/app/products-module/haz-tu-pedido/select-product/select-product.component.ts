import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ProductCategory {
  key: string;
  name: string;
}

interface ProductItem {
  id: string;
  name: string;
  basePrice: number;
  img: string;
  category: string;
}

@Component({
  selector: 'app-select-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './select-product.component.html',
  styleUrls: ['./select-product.component.scss'],
})
export class SelectProductComponent {

  categories: ProductCategory[] = [
    { key: 'camisetas', name: 'Camisetas' },
    { key: 'sudaderas', name: 'Sudaderas' },
    { key: 'tazas', name: 'Tazas' }, 
    { key: 'accesorios', name: 'Accesorios' },
  ];

  selectedCategory = 'camisetas';

  products: ProductItem[] = [
    { id: '1', name: 'Camiseta premium', basePrice: 9.90, category: 'camisetas', img: '/images/mock/camiseta1.jpg' },
    { id: '2', name: 'Camiseta oversize', basePrice: 12.90, category: 'camisetas', img: '/images/mock/camiseta2.jpg' },

    { id: '3', name: 'Sudadera clásica', basePrice: 19.90, category: 'sudaderas', img: '/images/mock/sudadera1.jpg' },
    { id: '4', name: 'Sudadera con shorts', basePrice: 24.90, category: 'sudaderas', img: '/images/mock/sudadera2.jpg' },
    { id: '5', name: 'Sudadera completa', basePrice: 24.90, category: 'sudaderas', img: '/images/mock/sudadera3.jpg' },
    { id: '6', name: 'Sudadera clásica', basePrice: 24.90, category: 'sudaderas', img: '/images/mock/sudadera4.jpg' },
    { id: '7', name: 'Sudadera con cremallera', basePrice: 24.90, category: 'sudaderas', img: '/images/mock/sudadera5.jpg' },


    { id: '4', name: 'Taza cerámica', basePrice: 6.90, category: 'tazas', img: '/images/mock/taza1.jpg' },
    { id: '5', name: 'Taza loza', basePrice: 6.90, category: 'tazas', img: '/images/mock/taza2.jpg' },

    { id: '6', name: 'Gafas', basePrice: 6.90, category: 'accesorios', img: '/images/mock/accesorio1.jpg' },
    { id: '7', name: 'bolso', basePrice: 6.90, category: 'accesorios', img: '/images/mock/accesorio2.jpg' },
    { id: '8', name: 'Reloj', basePrice: 6.90, category: 'accesorios', img: '/images/mock/accesorio3.jpg' },
  ];

  get filteredProducts() {
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  selectCat(cat: string) {
    this.selectedCategory = cat;
  }
}
