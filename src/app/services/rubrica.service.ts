import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concat, Observable } from 'rxjs';
import Contatto from '../classes/Contatto';

@Injectable({
  providedIn: 'root'
})
export class RubricaService {

  ENDPOINT = 'http://localhost:3000/api';

  constructor(private readonly http: HttpClient) { }

  createNewContact(contact: Contatto): Observable<any> {
    return this.http.post<Contatto>(`${this.ENDPOINT}/contatti/crea`, contact);
  }

  getContattiForUser(username: string | null): Observable<Contatto[]> {
    return this.http.get<Contatto[]>(`${this.ENDPOINT}/contatti/${username}`)
  }

  deleteContact(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.ENDPOINT}/contatti/delete/${id}`);
  }

}
