import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Messaggio from '../classes/Messaggio';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  ENDPOINT = 'http://localhost:3000/api';

  constructor(
    private readonly http: HttpClient
  ) { }

  createMessaggio(messaggio: Messaggio): Observable<Messaggio> {
    return this.http.post<Messaggio>(`${this.ENDPOINT}/crea-messaggio`, messaggio);
  }

  getMessaggi(): Observable<Messaggio[]> {
    return this.http.get<Messaggio[]>(`${this.ENDPOINT}/messaggi`);
  }

}
