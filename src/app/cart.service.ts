import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor(private http: HttpClient) {}

  getAllItems() {
    return this.http.get("/api/cart-items", { responseType: "json" });
  }

  addItem(newItem) {
    return this.http.post("/api/cart-items", newItem, { responseType: "json" });
  }

  deleteItem(id) {
    return this.http.delete(`/api/cart-items/${id}`, { responseType: "json" });
  }

  editItem(item) {
    // console.log(item);

    return this.http.put(`/api/cart-items/${item.id}`, item, {
      responseType: "json"
    });
  }
}
