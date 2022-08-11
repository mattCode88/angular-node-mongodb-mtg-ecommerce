import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Order from '../classes/Order';
import IUser from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  ENDPOINT = 'http://localhost:3000/api';

  constructor(
    private readonly http: HttpClient,
  ) { }

  getInfoUser(username: string): Observable<any> {
    return this.http.get<IUser>(`${this.ENDPOINT}/dashboard/user/${username}`);
  }

  getCarta(cardName: string): Observable<any> {
    return this.http.get<any>(`https://api.magicthegathering.io/v1/cards?name=${cardName}`);
  }

  createNewOrder(order: Order): Observable<boolean> {
    return this.http.post<boolean>(`${this.ENDPOINT}/dashboard/order/create`, order);
  }

}
