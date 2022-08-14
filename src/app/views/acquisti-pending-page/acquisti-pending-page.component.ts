import { Component, OnInit } from '@angular/core';
import Order from 'src/app/classes/Order';
import IOrderDetail from 'src/app/interfaces/IOrderDetail';
import { AuthService } from 'src/app/services/auth.service';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-acquisti-pending-page',
  templateUrl: './acquisti-pending-page.component.html',
  styleUrls: ['./acquisti-pending-page.component.css']
})
export class AcquistiPendingPageComponent implements OnInit {

  username?: string;
  ordersBuyer: IOrderDetail[] = [];

  constructor(
    private readonly authService: AuthService,
    private readonly dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.username = this.authService.getLoggedIn()!;
    this.dashboardService.getOrderByBuyer(this.username).subscribe(res => {
      this.ordersBuyer = res;
      // console.log(this.ordersBuyer)
    })
  }

}
