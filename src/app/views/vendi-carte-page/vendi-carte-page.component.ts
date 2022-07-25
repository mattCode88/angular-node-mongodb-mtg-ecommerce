import { Component, OnInit } from '@angular/core';
import Card from 'src/app/classes/Card';

@Component({
  selector: 'app-vendi-carte-page',
  templateUrl: './vendi-carte-page.component.html',
  styleUrls: ['./vendi-carte-page.component.css']
})
export class VendiCartePageComponent implements OnInit {

  searchedCards?: Card[] = [];

  constructor() { }

  takeCardsList(cardList: Card[]): void {
    this.searchedCards = cardList;
  }

  ngOnInit(): void {
  }

}
