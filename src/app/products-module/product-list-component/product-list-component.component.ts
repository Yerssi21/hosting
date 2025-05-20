import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/models/category';
import { ProductService } from '../../shared/services/product.service';
import { CommonModule } from '@angular/common';
import { style, animate, transition } from '@angular/animations';
import { ProductCardComponentComponent } from "../product-card-component/product-card-component.component";

@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports: [CommonModule, ProductCardComponentComponent],
  templateUrl: './product-list-component.component.html',
  styleUrl: './product-list-component.component.scss',
  animations: [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-in', style({ opacity: 1 }))
      ])
      ]  
})
export class ProductListComponentComponent  implements OnInit {
  categories: Category[] = [];
  categoriesTwo: Category[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
    this.categoriesTwo = this.productService.getCategoriesTwo();
  }
}
