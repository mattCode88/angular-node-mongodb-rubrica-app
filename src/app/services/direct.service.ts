import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Contatto from '../classes/Contatto';
import Messaggio from '../classes/Messaggio';

@Injectable({
  providedIn: 'root'
})
export class DirectService {

  ENDPOINT = 'http://localhost:3000/api';

  constructor(
    private readonly http: HttpClient
  ) { }

  getNomeDestinatario(id: string): Observable<Contatto> {
    return this.http.get<Contatto>(`${this.ENDPOINT}/direct/${id}`)
  }

  createDirect(messaggio: Messaggio): Observable<Messaggio> {
    return this.http.post<Messaggio>(`${this.ENDPOINT}/direct/crea-direct`, messaggio);
  }

  getContattiDirect(username: string): Observable<Messaggio[]> {
    return this.http.get<Messaggio[]>(`${this.ENDPOINT}/direct/contatti/${username}`)
  }

}
