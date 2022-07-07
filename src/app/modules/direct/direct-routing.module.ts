import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectPageComponent } from 'src/app/views/direct-page/direct-page.component';
import { SingleDirectPageComponent } from 'src/app/views/single-direct-page/single-direct-page.component';

const routes: Routes = [
  { path: '', component: DirectPageComponent },
  { path: ':id', component: SingleDirectPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectRoutingModule { }
