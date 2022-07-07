import { Component, OnChanges } from '@angular/core';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'angular-rubrica-app';
  // logUser: string = '';

  constructor(
    // private readonly authService: AuthService
  ) {

    // this.logUser = this.authService.getLoggedIn()!;
    // console.log(this.logUser)
    // this.http.get('localhost:3000/api/contatti').subscribe(res => console.log(res))
    // this.getUsers().subscribe((res) => console.log(res))
  }


  // getUsers(): Observable<any[]> {
  //   return this.http.get<any[]>('http://localhost:3000/api/contatti')
  // };
}
