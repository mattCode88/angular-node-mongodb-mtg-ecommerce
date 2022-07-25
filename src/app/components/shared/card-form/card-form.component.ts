import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CardValidator from 'src/app/validators/card-validator';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  @Output() sendPrice: EventEmitter<{ prezzo: string, quantita: string }> = new EventEmitter<{ prezzo: string, quantita: string }>()

  cardForm: FormGroup;

  constructor(
    private readonly builder: FormBuilder
  ) {

    this.cardForm = builder.group({
      prezzo: ['', [Validators.required, CardValidator.validaPrezzzo()]],
      quantita: ['', [Validators.required, CardValidator.validaQuantita()]]
    })

  }

  onSubmit(): void {
    if (this.cardForm.valid) { this.sendPrice.emit(this.cardForm.value) };
  }

  ngOnInit(): void {
  }

}
