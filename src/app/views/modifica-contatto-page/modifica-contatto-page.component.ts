import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Contatto from 'src/app/classes/Contatto';
import { AuthService } from 'src/app/services/auth.service';
import { RubricaService } from 'src/app/services/rubrica.service';

@Component({
  selector: 'app-modifica-contatto-page',
  templateUrl: './modifica-contatto-page.component.html',
  styleUrls: ['./modifica-contatto-page.component.scss']
})
export class ModificaContattoPageComponent implements OnInit {

  username: string | null = '';
  idSelected: string = '';
  contatto?: Contatto;
  used: string = 'paginaDettaglio';

  constructor(
    private readonly authservice: AuthService,
    private readonly rubricaService: RubricaService,
    private readonly route: ActivatedRoute,
  ) {

    this.route.params.subscribe(params => {

      this.idSelected = params['id']

      this.username = this.authservice.getLoggedIn();
      console.log(this.idSelected, this.username)

      this.rubricaService.getContattiForUser(this.username).subscribe(res => {
        this.contatto = res.find(contatto => contatto._id === this.idSelected)
      })

    });

  }



  ngOnInit(): void {
  }

}
