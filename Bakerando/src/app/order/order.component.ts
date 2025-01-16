import { Component } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  
  name: string = "";
  products: string = "";

  constructor(private orderService: OrderService) {}

  onSubmit() {
    const newOrder: Order = {
      name: this.name,
      products: this.products
    };

    this.orderService.addOrder(newOrder);
    this.name = "";
    this.products = "";
  }
}
