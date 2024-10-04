import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateFormationComponent } from '../update-formation/update-formation/update-formation.component';
import { UpdateParticipantComponent } from './update-participant.component';

const routes: Routes = [
  
    { path: '', component: UpdateParticipantComponent },
    // Autres routes...
  ];
  


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateParticipantRoutingModule { }
