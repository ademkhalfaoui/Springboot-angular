import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllformationsRoutingModule } from './allformations-routing.module';
import { AllformationsComponent } from './allformations.component';


@NgModule({
  declarations: [
    AllformationsComponent
  ],
  imports: [
    CommonModule,
    AllformationsRoutingModule
  ]
})
export class AllformationsModule { }
