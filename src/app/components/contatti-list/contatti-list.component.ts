import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Contatto from 'src/app/classes/Contatto';
import { AuthService } from 'src/app/services/auth.service';
import { RubricaService } from 'src/app/services/rubrica.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contatti-list',
  templateUrl: './contatti-list.component.html',
  styleUrls: ['./contatti-list.component.scss']
})
export class ContattiListComponent implements OnInit {

  username: string | null = '';
  listaContatti: Contatto[] = [];

  constructor(
    private readonly rubricaService: RubricaService,
    private readonly authService: AuthService
  ) {

    this.username = authService.getLoggedIn();
    if (this.username) {
      this.refreshContatti();
    }

  }

  refreshContatti(): void {
    this.rubricaService.getContattiForUser(this.username).subscribe(res => {
      this.listaContatti = res;
    })
  }

  cancellaContatto(id: string) {
    this.rubricaService.deleteContact(id).subscribe(res => {
      if (res) {
        Swal.fire({
          title: 'Contatto eliminato!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        this.refreshContatti();
      }
    })
  }

  ngOnInit(): void {

  }



}
