import { Component, Input } from '@angular/core';
import { Category } from '../../models/category';

@Component({
  selector: 'app-product-card-component',
  imports: [],
  templateUrl: './product-card-component.component.html',
  styleUrl: './product-card-component.component.scss'
})
export class ProductCardComponentComponent {
  @Input() category!: Category;
}
