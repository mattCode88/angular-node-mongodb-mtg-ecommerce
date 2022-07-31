import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Card from 'src/app/classes/Card';
import MyError from 'src/app/classes/MyError';
import SellCard from 'src/app/classes/SellCard';
import { AuthService } from 'src/app/services/auth.service';
import { CardService } from 'src/app/services/card.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnChanges {

  @Input() visibility = false;
  @Input() card?: Card;
  @Input() myCard?: SellCard;
  @Input() typeModal?: string;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() cardDeleted: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() cardModify: EventEmitter<boolean> = new EventEmitter<boolean>();

  typeCardForm = 'modifica';
  owner?: string;
  myError: MyError = new MyError();

  constructor(
    private readonly authService: AuthService,
    private readonly cardService: CardService,
    private readonly router: Router
  ) { }

  close(): void {
    this.closeModal.emit(false);
  }

  takePrice(obj: { prezzo: string, quantita: string }): void {
    this.myError.resetError();
    this.owner = this.authService.getLoggedIn()!;
    if (this.card) {
      if (this.card.colors === undefined) this.card.colors = ['Colorless'];
      const addCard = new SellCard(
        this.card.identity,
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
        if (res.status) {
          this.myError.setError(true, res.message)
        } else {
          Swal.fire({
            title: 'Carta aggiunta alla collezione',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          this.close();
          this.router.navigateByUrl('/dashboard/mie-carte');
        }
      })
    }

  }

  deleteCards(myCard: SellCard): void {
    this.cardService.deleteCard(myCard._id!).subscribe(res => {
      if (res) {
        this.cardDeleted.emit(true);
        this.close();
      }
    })
  }

  cartaModificata(event: boolean): void {
    this.cardModify.emit(true);
    this.close();
  }

  ngOnChanges(): void {
  }

  ngOnInit(): void {
    // if (this.myCard) console.log(this.myCard)
    // console.log(this.myCard)
    // console.log(this.card)
    // console.log(this.typeModal)
  }

}
