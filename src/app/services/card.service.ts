import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import SellCard from '../classes/SellCard';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  ENDPOINT = 'http://localhost:3000/api';

  constructor(
    private readonly http: HttpClient,
  ) { }

  addCard(card: SellCard): Observable<SellCard> {
    return this.http.post<SellCard>(`${this.ENDPOINT}/card/add`, card);
  }

}
