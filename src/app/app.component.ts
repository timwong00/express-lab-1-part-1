import { Component } from "@angular/core";
import { CartService } from "./cart.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  cartItems: any;

  constructor(private cartService: CartService) {
    this.cartService.getAllItems().subscribe(response => {
      this.cartItems = response;
    });
  }

  addItem(item) {
    console.log(item);
    this.cartService.addItem(item.value).subscribe(response => {
      this.cartItems = response;
    });
  }

  deleteItem(id) {
    this.cartService.deleteItem(id).subscribe(response => {
      this.cartItems = response;
    });
  }
}
