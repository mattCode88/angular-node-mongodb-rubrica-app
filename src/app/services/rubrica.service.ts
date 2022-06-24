import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Contatto from '../classes/Contatto';

@Injectable({
  providedIn: 'root'
})
export class RubricaService {

  ENDPOINT = 'http://localhost:3000/api';

  constructor(private readonly http: HttpClient) { }

  getUserForUsername(username: string): Observable<Contatto[]> {
    return this.http.get<Contatto[]>(`${this.ENDPOINT}/contatti/${username}`)
  }
}
