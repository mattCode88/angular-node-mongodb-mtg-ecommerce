import { Component, Input, OnInit } from '@angular/core';
import Order from 'src/app/classes/Order';
import IOrderDetail from 'src/app/interfaces/IOrderDetail';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  @Input() orderPending?: IOrderDetail;
  @Input() orderReceipts?: IOrderDetail;

  constructor() { }

  ngOnChanges(): void {
    // console.log(this.orderBuyer)
  }

  ngOnInit(): void {
  }

}
