import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatPageComponent } from '../../views/chat-page/chat-page.component';
import { ChatFormComponent } from '../../components/chat-form/chat-form.component';
import { ChatListComponent } from '../../components/chat-list/chat-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListLoggedComponent } from '../../components/list-logged/list-logged.component';


@NgModule({
  declarations: [
    ChatPageComponent,
    ChatFormComponent,
    ChatListComponent,
    ListLoggedComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ChatListComponent,
    ChatFormComponent
  ]
})
export class ChatModule { }
