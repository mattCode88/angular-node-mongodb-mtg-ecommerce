import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import IUser from '../interfaces/IUser';
import MyError from '../classes/MyError';
import ILogUser from '../interfaces/ILogUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ENDPOINT = 'http://localhost:3000/api';

  constructor(
    private readonly http: HttpClient,
  ) { }

  registerUsers(user: IUser): Observable<any> {
    return this.http.post<IUser>(`${this.ENDPOINT}/auth/register`, user);
  }

  loginUser(logUser: ILogUser): Observable<MyError> {
    return this.http.post<MyError>(`${this.ENDPOINT}/auth/login`, logUser)
  }

  logoutUser(username: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.ENDPOINT}/auth/logout/${username}`);
  }

  getLoggedIn(): string | null {
    return localStorage.getItem('username')
  }

  isLogged(): boolean {
    return localStorage.getItem('username') !== null;
  }

  login(username: string): boolean {
    localStorage.setItem('username', username);
    return true;
  }

  logout(): void {
    localStorage.removeItem('username');
  }

}
