import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Card from 'src/app/classes/Card';
import SellCard from 'src/app/classes/SellCard';
import ISearchCard from 'src/app/interfaces/ISearchCard';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-cards-search',
  templateUrl: './cards-search.component.html',
  styleUrls: ['./cards-search.component.css']
})
export class CardsSearchComponent implements OnInit, OnChanges {

  searchForm: FormGroup;
  searchCompleteForm: FormGroup;
  arraySets?: string[] = [];
  arrayRaritys?: string[] = [];
  arrayTypes?: string[] = [];
  arrayColors?: string[] = [];
  arrayMana?: number[] = [];

  @Input() typeSearch?: string;
  @Input() myCardsArray: SellCard[] = [];
  @Output() sendCardsList: EventEmitter<Card[]> = new EventEmitter<Card[]>();
  @Output() searchEvent: EventEmitter<ISearchCard> = new EventEmitter<ISearchCard>();
  @Output() resetSearchEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private readonly dashboardService: DashboardService,
    private readonly builder: FormBuilder
  ) {

    this.searchForm = builder.group({
      cardName: ['', Validators.required]
    })

    this.searchCompleteForm = builder.group({
      cardName: [''],
      set: [''],
      rarity: [''],
      type: [''],
      color: [''],
      mana: [''],
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

  createArrayInput<T>(array: T[], element: T): void {
    if (!array.includes(element)) array.push(element);
  }

  reset(): void {

    this.searchCompleteForm.controls['cardName'].setValue('');
    this.searchCompleteForm.controls['set'].setValue('all');
    this.searchCompleteForm.controls['rarity'].setValue('all');
    this.searchCompleteForm.controls['type'].setValue('all');
    this.searchCompleteForm.controls['color'].setValue('all');
    this.searchCompleteForm.controls['mana'].setValue('all');
    this.resetSearchEvent.emit(true);


  }

  searchSubmit(): void {

    if (
      this.searchCompleteForm.value.cardName !== '' ||
      this.searchCompleteForm.value.set !== '' ||
      this.searchCompleteForm.value.set !== 'all' ||
      this.searchCompleteForm.value.rarity !== '' ||
      this.searchCompleteForm.value.rarity !== 'all' ||
      this.searchCompleteForm.value.type !== '' ||
      this.searchCompleteForm.value.type !== 'all' ||
      this.searchCompleteForm.value.color !== '' ||
      this.searchCompleteForm.value.color !== 'all' ||
      this.searchCompleteForm.value.mana !== '' ||
      this.searchCompleteForm.value.mana !== 'all'
    ) {
      this.searchEvent.emit(this.searchCompleteForm.value)
    }

  }

  ngOnChanges(): void {

    if (this.myCardsArray.length > 0) {
      this.myCardsArray.forEach(card => {

        if (card.colors) {
          card.colors.forEach(color => this.createArrayInput(this.arrayColors!, color));
        }

        if (card.types) {
          card.types.forEach(type => this.createArrayInput(this.arrayTypes!, type));
        }

        this.createArrayInput(this.arraySets!, card.set);
        this.createArrayInput(this.arrayRaritys!, card.rarity);
        this.createArrayInput(this.arrayMana!, card.mana);

      })
    }

  }

  ngOnInit(): void { }

}
