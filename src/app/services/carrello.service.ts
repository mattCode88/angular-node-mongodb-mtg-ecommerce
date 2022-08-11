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

  getCardToCart(buyer: string): Observable<BuyCard[]> {
    return this.http.get<BuyCard[]>(`${this.ENDPOINT}/cart/buy/${buyer}`);
  }

  updateCardToCart(card: BuyCard, id: string): Observable<boolean> {
    return this.http.put<boolean>(`${this.ENDPOINT}/cart/modifica`, [card, id]);
  }

  deleteCardToCart(cardId: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.ENDPOINT}/cart/delete/${cardId}`);
  }

  deleteAllCardToCart(buyer: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.ENDPOINT}/cart/delete/all/${buyer}`);
  }

}
