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

  addItem(newItem) {
    // console.log(item.value);
    this.cartService.addItem(newItem.value).subscribe(response => {
      this.cartItems = response;
    });
  }

  deleteItem(id) {
    this.cartService.deleteItem(id).subscribe(response => {
      this.cartItems = response;
    });
  }

  editItem(item) {
    console.log(item);

    this.cartService.editItem(item).subscribe(response => {
      this.cartItems = response;
    });
  }

  showEditForm(index) {
    this.cartItems[index].beingEdited = true;
    // console.log(this.cartItems);
  }

  hideEditForm(index) {
    this.cartItems[index].beingEdited = false;
    // console.log(this.cartItems);
  }
}
