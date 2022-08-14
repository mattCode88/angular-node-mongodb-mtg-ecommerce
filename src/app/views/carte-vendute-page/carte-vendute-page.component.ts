import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-carte-vendute-page',
  templateUrl: './carte-vendute-page.component.html',
  styleUrls: ['./carte-vendute-page.component.css']
})
export class CarteVendutePageComponent implements OnInit {

  username?: string;

  constructor(
    private readonly dashboardService: DashboardService,
    private readonly authService: AuthService
  ) { }

  ngOnInit(): void {
    this.username = this.authService.getLoggedIn()!;
    // console.log(this.username)
    this.dashboardService.getOrderBySeller(this.username).subscribe(res => {
      console.log(res)
    })
  }

}
