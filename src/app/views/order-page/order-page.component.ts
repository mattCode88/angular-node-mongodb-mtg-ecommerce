import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import BuyCard from 'src/app/classes/BuyCard';
import Order from 'src/app/classes/Order';
import IUser from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { CardService } from 'src/app/services/card.service';
import { CarrelloService } from 'src/app/services/carrello.service';
import { DashboardService } from 'src/app/services/dashboard.service';
import Swal from 'sweetalert2';

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
    private readonly cardService: CardService,
    private readonly router: Router,
    private readonly builder: FormBuilder,
  ) {

    this.formShipment = builder.group({
      shipment: ['', Validators.required]
    })
  }

  onSubmit(): void {
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

    if (event.success && this.chooseShipment && this.totalPrice) {

      const orderString = new Date().getTime().toString();
      const arrayPurchase: Order[] = this.carrelloCardsArray.map(card =>
        new Order(
          card.owner,
          card.buyer,
          false,
          false,
          orderString,
          this.chooseShipment!,
          this.totalPrice,
          card.name,
          card.colors,
          card.image,
          card.text,
          card.types,
          card.set,
          card.rarity,
          card.mana,
          card.price,
          card.buyQuantity,
          card.fidelity,
          card.power,
          card.toughness
        )
      );

      this.dashboardService.createNewOrder(arrayPurchase).subscribe(res => {

        if (res) {
          this.carrelloService.deleteAllCardToCart(this.username!).subscribe(res => {

            if (res) {
              this.cardService.updateManyCard(this.carrelloCardsArray).subscribe(response => {

                if (res) {
                  Swal.fire({
                    title: 'Pagamento effettuato!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                  this.router.navigateByUrl('/acquisti/pending')
                }
              })
            }
          })
        }
      })

    }
  }

  ngOnInit(): void {
    this.username = this.authService.getLoggedIn()!;
    if (this.username) {
      this.dashboardService.getInfoUser(this.username).subscribe(res => {
        this.userInfo = res;
      })
      this.carrelloService.getCardToCart(this.username).subscribe(res => {
        this.carrelloCardsArray = res;
        this.carrelloCardsArray.forEach(card => this.totalPrice += (card.price * card.buyQuantity));
      })
    }

  }

}
