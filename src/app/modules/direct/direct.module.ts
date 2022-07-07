import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectRoutingModule } from './direct-routing.module';
import { DirectPageComponent } from '../../views/direct-page/direct-page.component';
import { ChatModule } from '../chat/chat.module';
import { SingleDirectPageComponent } from '../../views/single-direct-page/single-direct-page.component';



@NgModule({
  declarations: [
    DirectPageComponent,
    SingleDirectPageComponent
  ],
  imports: [
    CommonModule,
    DirectRoutingModule,
    ChatModule,
  ],
})
export class DirectModule { }
