import { Component } from '@angular/core';
import { ProductCardComponent } from "./product-card.component";

@Component({
  selector: 'app-communication-product',
  templateUrl: './product.component.html',
  imports: [ProductCardComponent],
})
export class ProductComponent {
//   selectedProduct = {
//     id: 1,
//     name: 'Apple iPhone 14',
//     price: 799
//   };
  products = [
    { id: 1, name: 'Apple iPhone 18', price: 999 },
    { id: 2, name: 'Samsung Galaxy S33', price: 799 }
  ];
  product:{id: number, name: string, price: number} = {
    id: 0,
    name: '',
    price: 0
  };
  onAddToCart(product: any) {
    console.log('Added to cart:', product);
    this.product = product;
  }
}
