import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from 'src/app/guards/logged-in.guard';
import { ContattiDetailPageComponent } from 'src/app/views/contatti-detail-page/contatti-detail-page.component';
import { ContattiPageComponent } from 'src/app/views/contatti-page/contatti-page.component';
import { CreaContattoPageComponent } from 'src/app/views/crea-contatto-page/crea-contatto-page.component';
import { ModificaContattoPageComponent } from 'src/app/views/modifica-contatto-page/modifica-contatto-page.component';

const routes: Routes = [
  { path: '', component: ContattiPageComponent, canActivate: [LoggedInGuard] },
  { path: 'crea-contatto', component: CreaContattoPageComponent, canActivate: [LoggedInGuard] },
  { path: 'modifica-contatto/:id', component: ModificaContattoPageComponent, canActivate: [LoggedInGuard] },
  { path: 'detail/:id', component: ContattiDetailPageComponent, canActivate: [LoggedInGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RubricaRoutingModule { }
