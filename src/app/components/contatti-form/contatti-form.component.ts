import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Contatto from 'src/app/classes/Contatto';
import Error from 'src/app/classes/Error';
import { AuthService } from 'src/app/services/auth.service';
import { RubricaService } from 'src/app/services/rubrica.service';
import ContattiValidator from 'src/app/validators/contatti-validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contatti-form',
  templateUrl: './contatti-form.component.html',
  styleUrls: ['./contatti-form.component.scss']
})
export class ContattiFormComponent implements OnInit {

  contactForm: FormGroup
  username: string | null;
  error = new Error();
  isModifica: boolean = false;
  idModifica: string = '';

  @Input() contatto: Contatto | null = null;

  constructor(
    private readonly builder: FormBuilder,
    private readonly rubricaServices: RubricaService,
    private readonly authServices: AuthService,
    private readonly router: Router
  ) {

    this.username = this.authServices.getLoggedIn()

    this.contactForm = builder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      cognome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      telefono: ['', Validators.compose([Validators.required, ContattiValidator.validaTelefono()])],
      indirizzo: [''],
      email: ['', Validators.compose([Validators.required, ContattiValidator.validaMail()])],
      dataDiNascita: [''],
    })
  }

  onSubmit(): void {
    this.error.status = false;
    this.error.message = '';
    if (this.contactForm.valid && this.username !== null) {
      const newContact = new Contatto(
        this.contactForm.value.nome,
        this.contactForm.value.cognome,
        this.contactForm.value.telefono,
        this.username,
        this.contactForm.value.indirizzo,
        this.contactForm.value.email,
        this.contactForm.value.dataDiNascita,
      )
      if (!this.isModifica) {
        this.rubricaServices.createNewContact(newContact).subscribe(res => {
          if (res.status) {
            this.error.status = res.status;
            this.error.message = res.message;
          } else {
            Swal.fire({
              title: 'Contatto creato!',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
            this.router.navigateByUrl('/contatti')
          }
        })
      }
      if (this.isModifica && this.contatto) {

        this.idModifica = this.contatto._id!;

        this.rubricaServices.updateContact(newContact, this.idModifica).subscribe(res => {
          console.log(res)
          if (res.status) {
            this.error.status = res.status;
            this.error.message = res.message;
          } else {
            Swal.fire({
              title: 'Contatto aggiornato!',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
            this.router.navigateByUrl('/contatti')
          }
        })
      }
    }
  }

  ngOnInit(): void {
    if (this.contatto) {
      this.contactForm.controls['nome'].setValue(this.contatto.nome);
      this.contactForm.controls['cognome'].setValue(this.contatto.cognome);
      this.contactForm.controls['telefono'].setValue(this.contatto.telefono);
      this.contactForm.controls['indirizzo'].setValue(this.contatto.indirizzo);
      this.contactForm.controls['email'].setValue(this.contatto.email);
      this.contactForm.controls['dataDiNascita'].setValue(this.contatto.dataDiNascita);
      this.isModifica = true;
    }
  }

}
