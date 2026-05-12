import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  imports: [CommonModule]
})
export class ProductCardComponent {
  @Input() products: any;
  @Output() addToCart = new EventEmitter<any>();
  private productService = inject(ProductService);
  productsFromService = this.productService.getProducts();
  handleAddToCart(product: any) {
    this.addToCart.emit(product);
  }
}
