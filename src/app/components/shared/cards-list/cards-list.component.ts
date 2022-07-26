import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import BuyCard from 'src/app/classes/BuyCard';
import Card from 'src/app/classes/Card';
import MyError from 'src/app/classes/MyError';
import SellCard from 'src/app/classes/SellCard';
import { AuthService } from 'src/app/services/auth.service';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit, OnChanges {

  myError: MyError = new MyError();

  @Input() carrelloCardsArray: BuyCard[] = [];
  @Input() myCardsArray: SellCard[] = [];
  @Input() searchedCards: Card[] = [];
  @Input() homePage = false;
  @Output() cardDeleted: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() cardModify: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private readonly cardService: CardService,
    private readonly authService: AuthService,
  ) { }

  cardDeletedConfirm(confirm: boolean): void {
    this.cardDeleted.emit(confirm);
  }

  cartaModificata(event: boolean): void {
    this.cardModify.emit(true);
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

}
