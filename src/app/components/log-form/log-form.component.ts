import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Error from 'src/app/classes/Error';
import User from 'src/app/classes/User';
import ILogUser from 'src/app/interface/ILogUser';
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

    this.erroreDiLog.status = false;
    this.erroreDiLog.message = '';

    if (this.typeLog === 'register' && this.logForm.valid) {

      const newUser = new User(
        this.logForm.value.username,
        this.logForm.value.email,
        this.logForm.value.password
      )
      this.authServices.createUsers(newUser).subscribe(res => {
        if (res.status) {
          this.erroreDiLog.status = res.status;
          this.erroreDiLog.message = res.message;
        } else {
          Swal.fire({
            title: 'Utente creato!',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          this.router.navigateByUrl('/auth/login')
        }
      })
    }

    if (this.typeLog === 'login') {

      const halfUser: ILogUser = {
        username: this.logForm.value.username,
        password: this.logForm.value.password
      }
      this.authServices.logUser(halfUser).subscribe(res => {
        console.log(res)
        if (res.status) {
          this.erroreDiLog.status = res.status;
          this.erroreDiLog.message = res.message;
        } else {
          this.authServices.login(this.logForm.value.username)
          this.router.navigateByUrl('/home')
        }
      })
    }
  }

  ngOnInit(): void {
  }

}
