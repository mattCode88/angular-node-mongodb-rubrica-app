import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  username: string = '';

  constructor(
    private readonly authService: AuthService
  ) {

    this.username = this.authService.getLoggedIn()!;

  }

  ngOnInit(): void {
  }

}
