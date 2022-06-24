import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RubricaService } from 'src/app/services/rubrica.service';

@Component({
  selector: 'app-contatti-form',
  templateUrl: './contatti-form.component.html',
  styleUrls: ['./contatti-form.component.scss']
})
export class ContattiFormComponent implements OnInit {

  contactForm: FormGroup

  constructor(
    private readonly builder: FormBuilder,
    private readonly rubricaServices: RubricaService,
    private readonly router: Router
  ) {

    this.contactForm = builder.group({
      nome: [''],
      cognome: [''],
      telefono: [''],
      indirizzo: [''],
      email: [''],
      dataDiNascita: [''],
      username: [''],
    })
  }

  onSubmit(): void { }

  ngOnInit(): void {
  }

}
