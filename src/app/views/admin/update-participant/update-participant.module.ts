import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateParticipantRoutingModule } from './update-participant-routing.module';
import { UpdateParticipantComponent } from './update-participant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdateParticipantComponent
  ],
  imports: [
    CommonModule,
    UpdateParticipantRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UpdateParticipantModule { }
