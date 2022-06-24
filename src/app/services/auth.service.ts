import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import User from '../classes/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ENDPOINT = 'http://localhost:3000/api';

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) { }

  findUser(user: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.ENDPOINT}/auth/user/username/${user}`)
  }

  findUserEmail(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.ENDPOINT}/auth/user/email/${email}`)
  }

  verifyPasswd(form: FormGroup): Observable<boolean> {
    return this.http.post<boolean>(`${this.ENDPOINT}/auth/user/password`, form)
  }

  createUsers(form: FormGroup): Observable<User> {
    return this.http.post<User>(`${this.ENDPOINT}/auth/create`, form)
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

}
