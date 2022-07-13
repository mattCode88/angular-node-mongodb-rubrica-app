import { Component, OnChanges } from '@angular/core';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  username: string | null = null;

  constructor(private readonly authService: AuthService) {

    this.username = this.authService.getLoggedIn();

  }

}
