import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationsRoutingModule } from './formations-routing.module';
import { FormationsComponent } from './formations/formations.component';


@NgModule({
  declarations: [
    FormationsComponent
  ],
  imports: [
    CommonModule,
    FormationsRoutingModule
  ]
})
export class FormationsModule { }
