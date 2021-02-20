import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: "",
    address: ""
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {}

  removeFromCart(item) {
    this.items = this.cartService.removeFromCart(item);
    window.alert("This product has been removed from your cart!");
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn("Your order has been submitted", this.checkoutForm.value);
    this.checkoutForm.reset();
    window.alert("Order purchased!");
    this.router.navigate(['/']);
  }
}
