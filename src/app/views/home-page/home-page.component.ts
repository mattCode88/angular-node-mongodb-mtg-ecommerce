import { Component, OnInit } from '@angular/core';
import SellCard from 'src/app/classes/SellCard';
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

  ngOnInit(): void {

    this.username = this.authService.getLoggedIn()!;

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

}
