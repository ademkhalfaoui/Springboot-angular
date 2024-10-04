import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllparticipantsRoutingModule } from './allparticipants-routing.module';
import { AllparticipantsComponent } from './allparticipants.component';


@NgModule({
  declarations: [
    AllparticipantsComponent
  ],
  imports: [
    CommonModule,
    AllparticipantsRoutingModule
  ]
})
export class AllparticipantsModule { }
