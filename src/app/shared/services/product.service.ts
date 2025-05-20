import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  categories: Category[] = [
    { name: 'Vestidos', image: 'images/vestidos.avif', route: '/vestidos' },
    { name: 'Tops', image: 'images/tops.avif', route: '/tops' },
    { name: 'Tallas Grandes', image: 'images/tallas-grandes.avif', route: '/tallas-grandes' },
    { name: 'Conjuntos', image: 'images/conjuntos.avif', route: '/conjuntos' },
    { name: 'Bolsos', image: 'images/bolsos.avif', route: '/bolsos' },
    { name: 'Bottoms', image: 'images/bottoms.avif', route: '/bottoms' }
  ];

  categoriestwo: Category[] = [
    { name: 'Hombre', image: 'images/hombre.avif', route: '/Hombre' },
    { name: 'Niños', image: 'images/ninos.avif', route: '/Ninos' },
    { name: 'Jerseis', image: 'images/jerseis.avif', route: '/Jerseis' },
    { name: 'Sudaderas', image: 'images/sudaderas.avif', route: '/Sudaderas' },
    { name: 'Abrigos', image: 'images/abrigos.avif', route: '/Abrigos' },
    { name: 'Hogar y Vida', image: 'images/hogar.avif', route: '/Hogar-Vida' }
  ];
  getCategories(): Category[] {
    return this.categories;
  }

  getCategoriesTwo(): Category[] {
    return this.categoriestwo;
  }
}