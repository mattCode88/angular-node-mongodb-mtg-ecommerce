import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import SellCard from '../classes/SellCard';
import ISearchCard from '../interfaces/ISearchCard';
import ISearchParameter from '../interfaces/ISearchParameter';

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

  getOwnerCardForCardName(owner: string, cardName: string): Observable<SellCard[]> {
    return this.http.post<SellCard[]>(`${this.ENDPOINT}/card/owner-card/card-name`, [owner, cardName]);
  }

  getOwnerCardForParameters(owner: string, parameters: ISearchCard): Observable<SellCard[]> {
    return this.http.post<SellCard[]>(`${this.ENDPOINT}/card/owner-card/card-parameters`, [owner, parameters]);
  }

  addCard(card: SellCard): Observable<any> {
    return this.http.post<SellCard>(`${this.ENDPOINT}/card/add`, card);
  }

  updateCard(card: SellCard, id: string): Observable<boolean> {
    return this.http.put<boolean>(`${this.ENDPOINT}/card/modifica`, [card, id]);
  }

  deleteCard(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.ENDPOINT}/card/delete/${id}`);
  }

}
