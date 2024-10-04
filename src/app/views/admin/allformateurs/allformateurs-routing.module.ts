import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllformateursComponent } from './allformateurs.component';

const routes: Routes = [
  {path:'', component:AllformateursComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllformateursRoutingModule { }
