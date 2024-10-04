import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionParticipantComponent } from './inscription-participant/inscription-participant.component';

const routes: Routes = [
  {
    path:'',component:InscriptionParticipantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscriptionParticipantRoutingModule { }
