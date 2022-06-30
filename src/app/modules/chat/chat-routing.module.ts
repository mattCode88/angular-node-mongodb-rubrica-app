import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from 'src/app/guards/logged-in.guard';
import { ChatPageComponent } from 'src/app/views/chat-page/chat-page.component';

const routes: Routes = [
  { path: '', component: ChatPageComponent, canActivate: [LoggedInGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
