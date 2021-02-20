import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  removeFromCart(item) {
    this.cartService.removeFromCart(item);
    window.alert('This product has been removed from your cart!');
  }

}