import { Component, OnChanges, OnInit } from '@angular/core';
import SellCard from 'src/app/classes/SellCard';
import ISearchCard from 'src/app/interfaces/ISearchCard';
import { AuthService } from 'src/app/services/auth.service';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-mie-carte-page',
  templateUrl: './mie-carte-page.component.html',
  styleUrls: ['./mie-carte-page.component.css']
})
export class MieCartePageComponent implements OnInit {

  typeSearch = 'complete';
  myCardsArray: SellCard[] = [];
  owner?: string;

  constructor(
    private readonly authService: AuthService,
    private readonly cardService: CardService
  ) { }

  cardDeleted(confirm: boolean): void {
    if (confirm) {
      this.myCardsArray = [];
      this.takeMyCards();
    }
  }

  cardModify(event: boolean): void {
    if (event) {
      this.myCardsArray = [];
      this.takeMyCards();
    }
  }

  takeMyCards(): void {
    this.cardService.getOwnerCard(this.owner!).subscribe(res => {
      this.myCardsArray = res;
    })
  }

  searchEvent(event: ISearchCard): void {
    if (event.cardName !== '') {
      this.cardService.getOwnerCardForCardName(this.owner!, event.cardName).subscribe(res => {
        this.myCardsArray = res;
      })
    }
    if (event.cardName === '') {
      this.cardService.getOwnerCardForParameters(this.owner!, event).subscribe(res => {
        this.myCardsArray = res;
      })
    }
  }

  resetSearchEvent(event: boolean): void {
    if (event) {
      this.takeMyCards();
    }
  }

  ngOnInit(): void {
    this.owner = this.authService.getLoggedIn()!;
    this.takeMyCards()
  }

}
