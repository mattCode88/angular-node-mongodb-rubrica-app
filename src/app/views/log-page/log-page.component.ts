import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-page',
  templateUrl: './log-page.component.html',
  styleUrls: ['./log-page.component.scss']
})
export class LogPageComponent implements OnInit {

  typeLog = 'login';

  constructor(
    private readonly authServices: AuthService,
    private readonly router: Router
  ) {
    if (this.authServices.isLogged()) this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
