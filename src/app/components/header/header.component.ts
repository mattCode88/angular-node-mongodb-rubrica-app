import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username: string | null = '';

  constructor(
    public readonly authService: AuthService,
    private readonly router: Router
  ) {

  }

  ngOnInit(): void {

  }

  disconnettiUser(): void {
    this.username = this.authService.getLoggedIn()
    this.authService.disconnettiUser(this.username!).subscribe(res => {
      if (res) {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
      }
    });

  }

}
