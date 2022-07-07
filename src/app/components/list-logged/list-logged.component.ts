import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/classes/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list-logged',
  templateUrl: './list-logged.component.html',
  styleUrls: ['./list-logged.component.scss']
})
export class ListLoggedComponent implements OnInit {

  users: User[] = [];

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.authService.getLogUsers().subscribe(res => {
      this.users = res;
    })
  }

  apriDialogMessaggio(): void {
    this.router.navigateByUrl('/contatti')
  }

  ngOnInit(): void {
  }

}
