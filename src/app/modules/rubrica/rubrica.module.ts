import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RubricaRoutingModule } from './rubrica-routing.module';
import { ContattiPageComponent } from '../../views/contatti-page/contatti-page.component';


@NgModule({
  declarations: [
    ContattiPageComponent
  ],
  imports: [
    CommonModule,
    RubricaRoutingModule
  ]
})
export class RubricaModule { }
