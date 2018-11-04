import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CustomerService } from '../customer.service';
import { Customer } from '../customer';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {


  customers: Observable<Customer[]>;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.reloadData();
  }


  updateActive(isActive: boolean,  customer: Customer) {
    this.customerService.updateCustomer(customer.id,
      { name: customer.name, age: customer.age, active: isActive })
      .subscribe(
        data => {
          console.log(data);
          customer = data as Customer;
          this.reloadData();
        },
        error => console.log(error));
  }

  deleteCustomer(customer: Customer) {
    this.customerService.deleteCustomer(customer.id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  deleteCustomers() {
    this.customerService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

  reloadData() {
    this.customers = this.customerService.getCustomersList();
  }

}
