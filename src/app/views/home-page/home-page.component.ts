import { Component, OnChanges, OnInit } from '@angular/core';
import SellCard from 'src/app/classes/SellCard';
import ISearchCard from 'src/app/interfaces/ISearchCard';
import { AuthService } from 'src/app/services/auth.service';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  typeSearch = 'homeSearch';
  myCardsArray: SellCard[] = [];
  homePage = true;
  username?: string;

  constructor(
    private readonly cardService: CardService,
    private readonly authService: AuthService
  ) { }

  searchEvent(event: ISearchCard): void {
    if (this.username) {
      if (event.cardName !== '') {
        this.cardService.getCardForCardName(this.username!, event.cardName).subscribe(res => {
          this.myCardsArray = res;
        })
      }
      if (event.cardName === '') {
        this.cardService.getCardForParameters(this.username!, event).subscribe(res => {
          this.myCardsArray = res;
        })
      }
    } else {
      if (event.cardName !== '') {
        this.cardService.getAllCardForCardName(event.cardName).subscribe(res => {
          this.myCardsArray = res;
        })
      }
      if (event.cardName === '') {
        this.cardService.getAllCardForParameters(event).subscribe(res => {
          this.myCardsArray = res;
        })
      }
    }

  }

  resetSearchEvent(event: boolean): void {
    if (event) {
      this.gettingCards();
    }
  }

  gettingCards(): void {

    if (!this.username) {
      this.cardService.getAllCards().subscribe(res => {
        this.myCardsArray = res;
      })
    }
    if (this.username) {
      this.cardService.getAllCardsExcludingUser(this.username).subscribe(res => {
        this.myCardsArray = res;
      })
    }
  }

  ngOnInit(): void {

    this.username = this.authService.getLoggedIn()!;

    this.gettingCards();

  }

}
