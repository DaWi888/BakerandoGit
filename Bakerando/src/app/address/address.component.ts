import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  @Output() newOrderName = new EventEmitter<string>();

  setOrderName(inputValue: string): void {
    this.newOrderName.emit(inputValue);
  }
}
