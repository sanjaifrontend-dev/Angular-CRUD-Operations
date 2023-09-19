import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent {

  @Input() customer_list : Customer[]=[];
}
