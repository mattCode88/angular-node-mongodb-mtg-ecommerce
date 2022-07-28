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

  getOwnerCard(owner: string): Observable<any> {
    return this.http.get<string>(`${this.ENDPOINT}/card/owner-card/${owner}`);
  }

  addCard(card: SellCard): Observable<any> {
    return this.http.post<SellCard>(`${this.ENDPOINT}/card/add`, card);
  }

  deleteCard(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.ENDPOINT}/card/delete/${id}`);
  }

}
