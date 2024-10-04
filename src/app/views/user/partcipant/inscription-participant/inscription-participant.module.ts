import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionParticipantRoutingModule } from './inscription-participant-routing.module';
import { InscriptionParticipantComponent } from './inscription-participant/inscription-participant.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InscriptionParticipantComponent
  ],
  imports: [
    CommonModule,
    InscriptionParticipantRoutingModule,
    FormsModule
  ]
})
export class InscriptionParticipantModule { }
