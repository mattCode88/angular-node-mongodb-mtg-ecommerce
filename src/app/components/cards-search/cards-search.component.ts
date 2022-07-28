import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Card from 'src/app/classes/Card';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-cards-search',
  templateUrl: './cards-search.component.html',
  styleUrls: ['./cards-search.component.css']
})
export class CardsSearchComponent implements OnInit {

  searchForm: FormGroup;

  @Input() typeSearch?: string;
  @Output() sendCardsList: EventEmitter<Card[]> = new EventEmitter<Card[]>();

  constructor(
    private readonly dashboardService: DashboardService,
    private readonly builder: FormBuilder
  ) {

    this.searchForm = builder.group({
      cardName: ['', Validators.required]
    })

  }

  onSubmit(): void {
    this.dashboardService.getCarta(this.searchForm.value.cardName).subscribe(res => {
      let cardsArray = this.createArrayCards(res.cards);
      this.sendCardsList.emit(cardsArray);
    })
  }

  createArrayCards(array: any[]): Card[] {
    let filterCardsArray: Card[] = [];
    array.forEach(card => {
      if (card.imageUrl) {
        let newCard = new Card(
          card.number,
          card.name,
          card.colors,
          card.imageUrl,
          card.text,
          card.types,
          card.setName,
          card.rarity,
          card.cmc,
          card.loyalty,
          card.power,
          card.toughness,
        );
        filterCardsArray.push(newCard);
      }
    })
    return filterCardsArray;
  }

  ngOnInit(): void {
    console.log(this.typeSearch)
  }

}
