import { UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product?: Product;
  tagTypes: string[];
  colours: string[];

  @Output() productOut?: Product;

  constructor(/*private cartService: CartService , private store: Store<{ cart: CartItem[] }> */) {
    this.tagTypes = [];
    this.colours = [];
  }

  ngOnInit(): void {
    if (this?.product?.tags) {
      this?.product?.tags?.forEach((tag) => {
        var type: string = 'info';
        if (tag.toLowerCase() == 'nuts') {
          type = 'danger';
        }
        this.tagTypes.push(type); // To push what kind of product tag type for colouring
      });
    }

    // Choose colours of hover description background
    this.colours = ['white', 'white', 'white'];
  }

  // <svg:use [attr.xlink:href]="getIconPath(iconId)"></svg:use>
  // getIconPath(tag: string): string {
  //   return 'svg:g[app-path]';
  // }

  // // Product List parent
  // onChosen(product: Product): void {
  //   this.store.dispatch(addProductToCart({product}));
  // }
}
