import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiBaseUrl = 'http://localhost:5000/orders';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiBaseUrl);
  }

  addOrder(order: Order): void {
    this.http.post<Order>(this.apiBaseUrl, order).subscribe();
  }
}
