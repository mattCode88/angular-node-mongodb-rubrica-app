// import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
import LogError from 'src/app/classes/LogError';
import { AuthService } from 'src/app/services/auth.service';
import AuthValidator from 'src/app/validators/auth-validator';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.scss']
})
export class LogFormComponent implements OnInit {

  @Input() typeLog?: string;
  logForm: FormGroup;
  erroreDiLog: LogError;

  constructor(
    private readonly builder: FormBuilder,
    private readonly authServices: AuthService,
    private readonly router: Router
  ) {
    // console.log(this.typeLog)
    this.erroreDiLog = new LogError();

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

      this.authServices.createUsers(this.logForm.value).subscribe(res => {
        if (res) {
          this.router.navigateByUrl('/auth/login')
        } else {
          this.erroreDiLog.status = true;
          this.erroreDiLog.message = 'Username o Email già registrati.'
        }
      })
    }

    if (this.typeLog === 'login') {

    }

  }

  ngOnInit(): void {
    console.log(this.typeLog)
  }

}
