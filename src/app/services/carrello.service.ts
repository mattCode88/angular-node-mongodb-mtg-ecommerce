import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import BuyCard from '../classes/BuyCard';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  ENDPOINT = 'http://localhost:3000/api';

  constructor(
    private readonly http: HttpClient,
  ) { }

  addCardToCart(card: BuyCard): Observable<boolean> {
    return this.http.post<boolean>(`${this.ENDPOINT}/cart/buy-card`, card);
  }

}
