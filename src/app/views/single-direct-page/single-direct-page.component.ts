import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Messaggio from 'src/app/classes/Messaggio';
import { AuthService } from 'src/app/services/auth.service';
import { DirectService } from 'src/app/services/direct.service';

@Component({
  selector: 'app-single-direct-page',
  templateUrl: './single-direct-page.component.html',
  styleUrls: ['./single-direct-page.component.scss']
})
export class SingleDirectPageComponent implements OnInit {

  isSingleDirect = true;
  idDestinatario: string = '';
  directFiltrati: Messaggio[] = [];
  ultimoDirect: Messaggio | null = null;
  singleDirect = true;

  constructor(
    private readonly directService: DirectService,
    private readonly authService: AuthService,
    private readonly route: ActivatedRoute,
  ) {

    this.route.params.subscribe(params => {
      this.idDestinatario = params['id']
    });

  }

  lastMessage(messaggio: Messaggio): void {
    this.ultimoDirect = messaggio;
  }

  ngOnInit(): void {
  }


}
