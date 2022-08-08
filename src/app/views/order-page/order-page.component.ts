import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import BuyCard from 'src/app/classes/BuyCard';
import IUser from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { CarrelloService } from 'src/app/services/carrello.service';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  username?: string;
  userInfo?: IUser;
  totalPrice: number = 0;
  chooseShipment?: string;
  report = false;
  carrelloCardsArray: BuyCard[] = [];
  formShipment: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly carrelloService: CarrelloService,
    private readonly dashboardService: DashboardService,
    private readonly router: Router,
    private readonly builder: FormBuilder,
  ) {

    this.formShipment = builder.group({
      shipment: ['', Validators.required]
    })
  }

  onSubmit(): void {
    console.log(this.formShipment.value)
    if (this.formShipment.value) {
      if (this.formShipment.value.shipment === 'corriere') {
        this.totalPrice += 5;
      }
      if (this.formShipment.value.shipment === 'raccomandata') {
        this.totalPrice += 10;
      }
      this.chooseShipment = this.formShipment.value.shipment;
      this.report = true;
    }
  }

  onPaymentStatus(event: any): void {
    console.log(event)
    if (event.success) {
      this.router.navigateByUrl('/acquisti/pending')
    }
  }

  ngOnInit(): void {
    this.username = this.authService.getLoggedIn()!;
    if (this.username) {
      this.dashboardService.getInfoUser(this.username).subscribe(res => {
        this.userInfo = res;
        console.log(this.userInfo)
      })
      this.carrelloService.getCardToCart(this.username).subscribe(res => {
        this.carrelloCardsArray = res;
        this.carrelloCardsArray.forEach(card => this.totalPrice += (card.price * card.buyQuantity));
      })
    }
  }

}
