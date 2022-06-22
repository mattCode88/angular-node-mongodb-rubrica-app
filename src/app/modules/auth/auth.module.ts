import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LogPageComponent } from 'src/app/views/log-page/log-page.component';
import { RegisterPageComponent } from 'src/app/views/register-page/register-page.component';
import { LogFormComponent } from 'src/app/components/log-form/log-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LogPageComponent,
    RegisterPageComponent,
    LogFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
