import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from 'src/app/guards/logged-in.guard';
import { ContattiPageComponent } from 'src/app/views/contatti-page/contatti-page.component';

const routes: Routes = [
  { path: '', component: ContattiPageComponent, canActivate: [LoggedInGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RubricaRoutingModule { }
