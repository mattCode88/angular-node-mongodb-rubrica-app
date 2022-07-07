import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct-page',
  templateUrl: './direct-page.component.html',
  styleUrls: ['./direct-page.component.scss']
})
export class DirectPageComponent implements OnInit {

  direct = true;

  constructor() { }

  ngOnInit(): void {
  }

}
