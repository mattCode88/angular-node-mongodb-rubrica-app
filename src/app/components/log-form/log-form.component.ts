import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.scss']
})
export class LogFormComponent implements OnInit {

  @Input() typeLog?: string;
  logForm: FormGroup;

  constructor(
    private readonly builder: FormBuilder,
    // private readonly http: HttpClient,
    private readonly authServices: AuthService) {
    console.log(this.typeLog)
    this.logForm = builder.group({
      username: [''],
      email: [''],
      password: [''],
    })
  }

  onSubmit(): void {
    // console.log()
    this.authServices.createUsers(this.logForm.value).subscribe(res => console.log(res))
  }

  // createUsers(form: FormGroup): Observable<any[]> {
  //   return this.http.post<any[]>('http://localhost:3000/api/auth', form)
  // };


  ngOnInit(): void {
    console.log(this.typeLog)
  }

}
