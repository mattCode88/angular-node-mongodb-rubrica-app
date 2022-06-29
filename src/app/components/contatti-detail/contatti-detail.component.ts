import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Contatto from 'src/app/classes/Contatto';
import { RubricaService } from 'src/app/services/rubrica.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contatti-detail',
  templateUrl: './contatti-detail.component.html',
  styleUrls: ['./contatti-detail.component.scss']
})
export class ContattiDetailComponent implements OnInit {

  @Input() contatto: Contatto | undefined;
  @Input() used: string = '';
  @Output() takeIdContact: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private readonly rubricaService: RubricaService,
    private readonly router: Router
  ) {
  }

  cancellaContatto(contatto: Contatto): void {
    this.rubricaService.deleteContact(contatto._id!).subscribe(res => {
      if (res) {
        Swal.fire({
          title: 'Contatto eliminato!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        this.router.navigateByUrl('/contatti')
      }
    })
  }

  prendiContatto(contatto: Contatto): void {
    const idContatto = contatto._id;
    this.takeIdContact.emit(idContatto);
  }

  ngOnInit(): void {
  }

}
