import { identifierName } from '@angular/compiler';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import Messaggio from 'src/app/classes/Messaggio';
import IDestinatario from 'src/app/interface/IDestinatario';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import { DirectService } from 'src/app/services/direct.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit, OnChanges {

  messaggi?: Messaggio[];
  username: string | null = '';
  directs: Messaggio[] = [];
  listaDestinatari: IDestinatario[] = [];
  directFiltrati: Messaggio[] = [];
  @Input() messaggio: Messaggio | null = null;
  @Input() idDestinatario: string = '';
  @Input() ultimoDirect: Messaggio | null = null;
  @Input() direct: boolean = false;
  @Input() singleDirect: boolean = false;

  constructor(
    private readonly chatService: ChatService,
    private readonly directService: DirectService,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {

    this.username = this.authService.getLoggedIn();
  }

  toSingleDirect(destinatarioId: string): void {
    this.router.navigateByUrl(`/direct/${destinatarioId}`)
  }

  unificaArray(array: IDestinatario[]): IDestinatario[] {
    const objects = array.map(obj => JSON.stringify(obj));
    const unico = [...new Set(objects)];
    return unico.map(str => JSON.parse(str));
  };

  ngOnInit(): void {

    if (!this.direct && !this.singleDirect) {
      this.chatService.getMessaggi().subscribe(res => {
        this.messaggi = res;
      })
    }

    if (this.direct) {
      this.directService.getContattiDirect(this.username!).subscribe(res => {

        if (res.length > 0) {
          this.directs = res;

          res.forEach(ris => {
            const newDestinatario: IDestinatario = {
              destinatario: ris.destinatario!,
              idDestinatario: ris.destinatarioId!
            }
            this.listaDestinatari.push(newDestinatario)
          })

          this.listaDestinatari = this.unificaArray(this.listaDestinatari)
          // console.log(this.listaDestinatari)
        }
      })
    }

    if (this.singleDirect) {
      this.directService.getContattiDirect(this.username!).subscribe(res => {
        this.directFiltrati = res.filter(messaggio => messaggio.destinatarioId === this.idDestinatario)
        console.log(this.directFiltrati)
      })

    }

  }

  ngOnChanges(): void {
    if (this.messaggio !== null) {
      this.chatService.getMessaggi().subscribe(res => {
        this.messaggi = res;
      })
    }
  }

}
