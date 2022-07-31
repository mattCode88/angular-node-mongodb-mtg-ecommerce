import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Card from 'src/app/classes/Card';
import SellCard from 'src/app/classes/SellCard';

@Component({
  selector: 'app-cards-detail',
  templateUrl: './cards-detail.component.html',
  styleUrls: ['./cards-detail.component.css']
})
export class CardsDetailComponent implements OnInit {

  @Input() card?: Card;
  @Input() myCard?: SellCard;
  @Output() cardDeletedConfirm: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() cartaModificata: EventEmitter<boolean> = new EventEmitter<boolean>();

  visibility = false;
  typeModal = '';

  constructor() { }

  openModal(typeModal?: string): void {
    if (typeModal) {
      this.typeModal = typeModal;
    }
    this.visibility = true;
  }

  closeModal(event: boolean): void {
    this.visibility = event;
  }

  cardDeleted(event: boolean): void {
    this.cardDeletedConfirm.emit(true);
  }

  cardModify(event: boolean): void {
    this.cartaModificata.emit(true);
  }

  ngOnInit(): void {
  }

}
