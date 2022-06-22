import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import User from '../classes/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ENDPOINT = 'http://localhost:3000/api';

  constructor(private readonly http: HttpClient) { }

  createUsers(form: FormGroup): Observable<User[]> {
    return this.http.post<User[]>(`${this.ENDPOINT}/auth`, form)
  };
}
