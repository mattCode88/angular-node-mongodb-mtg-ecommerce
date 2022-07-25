import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import Card from 'src/app/classes/Card';
import SellCard from 'src/app/classes/SellCard';
import { AuthService } from 'src/app/services/auth.service';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnChanges {

  @Input() visibility = false;
  @Input() card?: Card;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  owner?: string;

  constructor(
    private readonly authService: AuthService,
    private readonly cardService: CardService
  ) { }

  close(): void {
    this.closeModal.emit(false);
  }

  takePrice(obj: { prezzo: string, quantita: string }): void {
    this.owner = this.authService.getLoggedIn()!;
    if (this.card) {
      if (this.card.colors === undefined) this.card.colors = ['Colorless'];
      const addCard = new SellCard(
        this.owner,
        this.card.name,
        this.card.colors,
        this.card.image,
        this.card.text,
        this.card.types,
        this.card.set,
        this.card.rarity,
        this.card.mana,
        Number(obj.prezzo),
        Number(obj.quantita),
        0,
        false,
        this.card?.fidelity,
        this.card?.power,
        this.card?.toughness
      )
      this.cardService.addCard(addCard).subscribe(res => {
        console.log(res)
      })
    }
    this.close();
  }

  ngOnChanges(): void {
  }

  ngOnInit(): void {

  }

}
