import { Component, Input, OnInit } from '@angular/core';
import Card from 'src/app/classes/Card';

@Component({
  selector: 'app-cards-detail',
  templateUrl: './cards-detail.component.html',
  styleUrls: ['./cards-detail.component.css']
})
export class CardsDetailComponent implements OnInit {

  @Input() card?: Card;

  visibility = false;

  constructor() { }

  openModal(): void {
    this.visibility = true;
  }

  closeModal(event: boolean): void {
    this.visibility = event;
  }

  ngOnInit(): void {
  }

}
