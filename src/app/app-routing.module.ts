import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import { HomePageComponent } from './views/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, canActivate: [LoggedInGuard] },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'contatti', loadChildren: () => import('./modules/rubrica/rubrica.module').then(m => m.RubricaModule) },
  { path: 'chat', loadChildren: () => import('./modules/chat/chat.module').then(m => m.ChatModule) },
  { path: 'direct', loadChildren: () => import('./modules/direct/direct.module').then(m => m.DirectModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
