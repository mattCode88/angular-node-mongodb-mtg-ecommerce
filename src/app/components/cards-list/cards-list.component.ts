import { Component, Input, OnChanges, OnInit } from '@angular/core';
import Card from 'src/app/classes/Card';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit, OnChanges {

  @Input() searchedCards: Card[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    // if (this.searchedCards.length > 0) console.log(this.searchedCards)
  }

}
