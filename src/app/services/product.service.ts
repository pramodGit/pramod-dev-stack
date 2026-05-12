import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts() {
    return [
      { id: 1, name: 'iPhone 14', price: 799 },
      { id: 2, name: 'Samsung S23', price: 699 },
    ];
  }
}
