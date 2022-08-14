import { Component, Input, OnChanges, OnInit } from '@angular/core';
import Order from 'src/app/classes/Order';
import IOrderDetail from 'src/app/interfaces/IOrderDetail';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnChanges {

  ordersReceipts?: IOrderDetail[];
  ordersPending?: IOrderDetail[];

  @Input() ordersBuyer?: IOrderDetail[];

  constructor() { }

  ngOnChanges(): void {
    if (this.ordersBuyer!.length > 0) {
      this.ordersReceipts = this.ordersBuyer?.filter(order => order.receipts);
      this.ordersPending = this.ordersBuyer?.filter(order => !order.receipts);
      // console.log(this.orderReceipts)
      // console.log(this.orderPending)
    }

  }

  ngOnInit(): void {
  }

}
