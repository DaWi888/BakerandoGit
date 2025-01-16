import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  items: Array<string> = ['Brot', 'Semmel', 'Weckerl', 'Breze'];
  
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
