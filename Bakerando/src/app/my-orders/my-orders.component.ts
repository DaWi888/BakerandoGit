import { Component } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../order';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  orders: Order[] = [];
  name ='';

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((orders) => (this.orders = orders));
  }

  onNewName(newName: string): void {
    this.name = newName;

    this.orders = this.orders.filter(order => order.name == newName);
  }

}
