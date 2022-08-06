import { Component, OnInit } from '@angular/core';
import BuyCard from 'src/app/classes/BuyCard';
import { AuthService } from 'src/app/services/auth.service';
import { CarrelloService } from 'src/app/services/carrello.service';

@Component({
  selector: 'app-carrello-page',
  templateUrl: './carrello-page.component.html',
  styleUrls: ['./carrello-page.component.css']
})
export class CarrelloPageComponent implements OnInit {

  username?: string;
  totalPrice: number = 0;
  carrelloCardsArray: BuyCard[] = [];

  constructor(
    private readonly authService: AuthService,
    private readonly carrelloService: CarrelloService
  ) { }

  cardDeleted(confirm: boolean): void {
    this.takeMyCardToCart()
  }

  cardModify(confirm: boolean): void {
    this.takeMyCardToCart()
  }

  takeMyCardToCart(): void {
    this.username = this.authService.getLoggedIn()!;
    if (this.username) {
      this.carrelloService.getCardToCart(this.username).subscribe(res => {
        this.carrelloCardsArray = res;
        this.calculateTotalPrice(this.carrelloCardsArray);
      })
    }
  }

  calculateTotalPrice(array: BuyCard[]): void {
    this.totalPrice = 0;
    array.forEach(card => {
      this.totalPrice += card.buyQuantity * card.price;
    })
  }

  ngOnInit(): void {
    this.takeMyCardToCart()
  }

}
