import { Component, EventEmitter } from '@angular/core';
import { Customer } from '../models/customer';
import { Output } from '@angular/core';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent {

  customer_list: Customer[] = [];

  @Output() customerAdded = new EventEmitter<Customer[]>

  constructor(){ }

  ngOnInit(): void { }

  addCustomer(customer_name:string){
    let customer: Customer = {name:customer_name};
    this.customer_list.push(customer);
    this.customerAdded.emit(this.customer_list);
  }
  
}
