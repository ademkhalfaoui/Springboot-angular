import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllformationsComponent } from './allformations.component';

const routes: Routes = [
  {path:'', component:AllformationsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllformationsRoutingModule { }
