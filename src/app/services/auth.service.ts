import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import User from '../classes/User';
import ILogUser from '../interface/ILogUser';
import Error from '../classes/Error';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ENDPOINT = 'http://localhost:3000/api';

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) { }

  createUsers(user: User): Observable<any> {
    return this.http.post<User>(`${this.ENDPOINT}/auth/create`, user)
  }

  logUser(logUser: ILogUser): Observable<Error> {
    return this.http.post<Error>(`${this.ENDPOINT}/auth/login`, logUser)
  }

  login(username: string): boolean {
    localStorage.setItem('username', username);
    return true;
  }

  logout(): void {
    localStorage.removeItem('username');
    this.router.navigate(['/auth/login'])
  }

  isLogged(): boolean {
    return localStorage.getItem('username') !== null;
  }

  getLoggedIn(): string | null {
    return localStorage.getItem('username')
  }

}
