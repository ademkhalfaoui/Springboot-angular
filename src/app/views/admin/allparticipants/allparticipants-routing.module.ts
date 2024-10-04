import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllparticipantsComponent } from './allparticipants.component';

const routes: Routes = [
  {path:'',component:AllparticipantsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllparticipantsRoutingModule { }
