import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product-service.service';
import { filter } from 'rxjs';
// import { CartService } from 'src/app/services/cart-service.service';
// import { Store } from '@ngrx/store';

@Component({
  selector: 'app-feature-product-list',
  templateUrl: './feature-product-list.component.html',
  styleUrls: ['./feature-product-list.component.scss'],
})
export class FeatureProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService /*, private cartService: CartService, private store: Store<{count: number, product: Product}> */
  ) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products.slice(0, 3)));
  }
}
