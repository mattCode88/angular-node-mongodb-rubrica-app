import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatPageComponent } from '../../views/chat-page/chat-page.component';
import { ChatFormComponent } from '../../components/chat-form/chat-form.component';
import { ChatListComponent } from '../../components/chat-list/chat-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChatPageComponent,
    ChatFormComponent,
    ChatListComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    ReactiveFormsModule
  ]
})
export class ChatModule { }
