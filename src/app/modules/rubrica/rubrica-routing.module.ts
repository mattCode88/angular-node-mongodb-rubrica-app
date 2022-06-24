import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from 'src/app/guards/logged-in.guard';
import { ContattiPageComponent } from 'src/app/views/contatti-page/contatti-page.component';
import { CreaContattoPageComponent } from 'src/app/views/crea-contatto-page/crea-contatto-page.component';

const routes: Routes = [
  { path: '', component: ContattiPageComponent, canActivate: [LoggedInGuard] },
  { path: 'crea-contatto', component: CreaContattoPageComponent, canActivate: [LoggedInGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RubricaRoutingModule { }
