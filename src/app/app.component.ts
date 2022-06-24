import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'angular-rubrica-app';
  constructor() {
    // this.http.get('localhost:3000/api/contatti').subscribe(res => console.log(res))
    // this.getUsers().subscribe((res) => console.log(res))
  }

  // getUsers(): Observable<any[]> {
  //   return this.http.get<any[]>('http://localhost:3000/api/contatti')
  // };
}
