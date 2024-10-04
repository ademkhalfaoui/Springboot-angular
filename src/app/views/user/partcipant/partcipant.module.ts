import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartcipantRoutingModule } from './partcipant-routing.module';
import { ParticipantComponent } from './participant/participant.component';


@NgModule({
  declarations: [
    ParticipantComponent
  ],
  imports: [
    CommonModule,
    PartcipantRoutingModule
  ]
})
export class PartcipantModule { }
