import { Component, OnChanges, OnInit } from '@angular/core';
import Messaggio from 'src/app/classes/Messaggio';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {

  ultimoMessaggio: Messaggio | null = null;

  constructor() { }

  lastMessage(messaggio: Messaggio): void {
    this.ultimoMessaggio = messaggio
  }

  ngOnInit(): void {
  }

}
