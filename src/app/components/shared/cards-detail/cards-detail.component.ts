import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import BuyCard from 'src/app/classes/BuyCard';
import Card from 'src/app/classes/Card';
import MyError from 'src/app/classes/MyError';
import SellCard from 'src/app/classes/SellCard';
import { AuthService } from 'src/app/services/auth.service';
import { CarrelloService } from 'src/app/services/carrello.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cards-detail',
  templateUrl: './cards-detail.component.html',
  styleUrls: ['./cards-detail.component.css']
})
export class CardsDetailComponent implements OnInit {

  @Input() card?: Card;
  @Input() myCard?: SellCard;
  @Input() carrelloCard?: BuyCard;
  @Input() homePage = false;
  @Output() cardDeletedConfirm: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() cartaModificata: EventEmitter<boolean> = new EventEmitter<boolean>();

  visibility = false;
  typeModal = '';
  quantity = 0;
  username?: string;
  myError: MyError = new MyError();

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly carrelloService: CarrelloService
  ) { }

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

  quantityFunction(value: string, card: SellCard): void {
    if (value === 'minus') {
      this.quantity--;
      if (this.quantity < 0) this.quantity++;
    }
    if (value === 'plus') {
      this.quantity++
      if (this.quantity > card.toSell) this.quantity--;
    }
  }

  quantityCart(value: string, card: BuyCard): void {
    if (value === 'minus') {
      card.buyQuantity--;
      if (card.buyQuantity === 0) {
        this.carrelloService.deleteCardToCart(card._id!).subscribe(res => {
          if (res) {
            Swal.fire({
              title: 'Carta eliminata dal carrello.',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
            this.cardDeletedConfirm.emit(true);
          }
        })
      } else {
        this.carrelloService.updateCardToCart(card, card._id!).subscribe(res => {
          if (res) this.cartaModificata.emit(true);
        })
      }
    }
    if (value === 'plus') {
      card.buyQuantity++;
      if (card.buyQuantity > card.quantity) {
        card.buyQuantity--
      } else {
        this.carrelloService.updateCardToCart(card, card._id!).subscribe(res => {
          if (res) this.cartaModificata.emit(true);
        })
      }

    }
  }

  cartFunction(card: SellCard): void {
    this.myError.resetError();
    if (!this.username) {
      this.router.navigateByUrl('/auth/login');
      return
    };
    if (this.quantity > 0) {

      let cardToBuy: BuyCard = new BuyCard(
        card._id!,
        card.owner,
        card.name,
        card.colors,
        card.image,
        card.text,
        card.types,
        card.set,
        card.rarity,
        card.mana,
        card.price,
        card.toSell,
        this.quantity,
        this.username,
        card.fidelity,
        card.power,
        card.toughness
      );

      this.carrelloService.addCardToCart(cardToBuy).subscribe(res => {
        if (res) {
          Swal.fire({
            title: 'Carta aggiunta al carrello.',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        } else {
          this.myError.setError(true, 'Carta già aggiunta al carrello.')
        }
      })
    }
  }

  ngOnInit(): void {
    this.username = this.authService.getLoggedIn()!;
  }

}
