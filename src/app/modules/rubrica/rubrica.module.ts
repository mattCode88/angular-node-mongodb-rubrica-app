import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RubricaRoutingModule } from './rubrica-routing.module';
import { ContattiPageComponent } from '../../views/contatti-page/contatti-page.component';
import { CreaContattoPageComponent } from 'src/app/views/crea-contatto-page/crea-contatto-page.component';
import { ContattiFormComponent } from '../../components/contatti-form/contatti-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContattiListComponent } from '../../components/contatti-list/contatti-list.component';
import { ContattiDetailComponent } from '../../components/contatti-detail/contatti-detail.component';
import { ContattiDetailPageComponent } from '../../views/contatti-detail-page/contatti-detail-page.component';


@NgModule({
  declarations: [
    ContattiPageComponent,
    CreaContattoPageComponent,
    ContattiFormComponent,
    ContattiListComponent,
    ContattiDetailComponent,
    ContattiDetailPageComponent,
  ],
  imports: [
    CommonModule,
    RubricaRoutingModule,
    ReactiveFormsModule
  ]
})
export class RubricaModule { }
