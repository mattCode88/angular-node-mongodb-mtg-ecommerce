import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
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

  @Input() myCardsArray: SellCard[] = [];
  @Input() searchedCards: Card[] = [];
  @Output() cardDeleted: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private readonly cardService: CardService,
    private readonly authService: AuthService,
  ) { }

  cardDeletedConfirm(confirm: boolean): void {
    this.cardDeleted.emit(confirm);
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

}
