import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllformateursRoutingModule } from './allformateurs-routing.module';
import { AllformateursComponent } from './allformateurs.component';


@NgModule({
  declarations: [
    AllformateursComponent
  ],
  imports: [
    CommonModule,
    AllformateursRoutingModule
  ]
})
export class AllformateursModule { }
