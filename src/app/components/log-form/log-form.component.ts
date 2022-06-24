import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Error from 'src/app/classes/Error';
import { AuthService } from 'src/app/services/auth.service';
import AuthValidator from 'src/app/validators/auth-validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.scss']
})
export class LogFormComponent implements OnInit {

  @Input() typeLog?: string;
  logForm: FormGroup;
  erroreDiLog: Error;

  constructor(
    private readonly builder: FormBuilder,
    private readonly authServices: AuthService,
    private readonly router: Router
  ) {
    this.erroreDiLog = new Error();
    this.logForm = builder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.required, AuthValidator.validaMail()])],
      password: ['', Validators.compose([Validators.required, AuthValidator.validaPassword()])],
    })
  }

  onSubmit(): void {

    if (this.typeLog === 'register' && this.logForm.valid) {

      this.erroreDiLog.status = false;
      this.erroreDiLog.message = '';

      this.authServices.findUser(this.logForm.value.username).subscribe(res => {

        if (res) {

          this.erroreDiLog.status = true;
          this.erroreDiLog.message = 'Username già registrato.'

        } else {

          this.authServices.findUserEmail(this.logForm.value.email).subscribe(res => {

            if (res) {

              this.erroreDiLog.status = true;
              this.erroreDiLog.message = 'Email già registrata.'

            } else {

              this.authServices.createUsers(this.logForm.value).subscribe(res => {

                if (res) {

                  Swal.fire({
                    title: 'Utente creato!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })

                  this.router.navigateByUrl('/auth/login')

                }
              })
            }
          })
        }
      })
    }

    if (this.typeLog === 'login') {

      this.authServices.findUser(this.logForm.value.username).subscribe(res => {

        if (!res) {

          this.erroreDiLog.status = true;
          this.erroreDiLog.message = 'Utente non trovato.'

        } else {

          this.authServices.verifyPasswd(this.logForm.value).subscribe(res => {

            if (!res) {

              console.log('Benvenuto')
              this.authServices.login(this.logForm.value.username)
              this.router.navigateByUrl('/contatti')

            } else {

              this.erroreDiLog.status = true;
              this.erroreDiLog.message = 'Password errata.'

            }
          })
        }
      })
    }
  }

  ngOnInit(): void {
  }

}
