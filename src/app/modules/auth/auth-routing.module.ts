import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogPageComponent } from 'src/app/views/log-page/log-page.component';
import { RegisterPageComponent } from 'src/app/views/register-page/register-page.component';

const routes: Routes = [
  { path: 'login', component: LogPageComponent },
  { path: 'register', component: RegisterPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
