import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import MyError from 'src/app/classes/MyError';
import SellCard from 'src/app/classes/SellCard';
import { CardService } from 'src/app/services/card.service';
import CardValidator from 'src/app/validators/card-validator';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  @Output() sendPrice: EventEmitter<{ prezzo: string, quantita: string }> = new EventEmitter<{ prezzo: string, quantita: string }>()
  @Output() cartaModificata: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Input() typeCardForm: string = '';
  @Input() myCard?: SellCard;

  cardForm: FormGroup;
  cardModifyForm: FormGroup;
  myError: MyError = new MyError();

  constructor(
    private readonly builder: FormBuilder,
    private readonly cardService: CardService
  ) {

    this.cardForm = builder.group({
      prezzo: ['', [Validators.required, CardValidator.validaPrezzzo()]],
      quantita: ['', [Validators.required, CardValidator.validaQuantita()]]
    })

    this.cardModifyForm = builder.group({
      prezzo: ['', [Validators.required, CardValidator.validaPrezzzo()]],
      quantita: ['', [Validators.required, CardValidator.validaQuantita()]],
      toSell: ['', [Validators.required, CardValidator.validaQuantitaInVendita()]],
    })

  }

  onSubmit(): void {
    if (this.cardForm.valid) { this.sendPrice.emit(this.cardForm.value) };
  }

  onModifySubmit(): void {
    this.myError.resetError();
    if (Number(this.cardModifyForm.value.toSell) > Number(this.cardModifyForm.value.quantita)) {
      this.myError.setError(true, 'Quantità in vendita maggiore della quantità disponibile.')
    } else {
      if (this.myCard) {
        this.myCard.price = Number(this.cardModifyForm.value.prezzo);
        this.myCard.quantity = Number(this.cardModifyForm.value.quantita);
        this.myCard.toSell = Number(this.cardModifyForm.value.toSell);
        this.cardService.updateCard(this.myCard, this.myCard._id!).subscribe(res => {
          if (res) {
            this.cartaModificata.emit(true);
          }
        })
      }
    }
  }

  ngOnInit(): void {
    if (this.myCard) {
      this.cardModifyForm.controls['prezzo'].setValue(this.myCard.price.toString());
      this.cardModifyForm.controls['quantita'].setValue(this.myCard.quantity.toString());
      this.cardModifyForm.controls['toSell'].setValue(this.myCard.toSell.toString());
    }
  }

}
