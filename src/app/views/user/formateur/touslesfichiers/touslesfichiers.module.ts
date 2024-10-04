import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TouslesfichiersRoutingModule } from './touslesfichiers-routing.module';
import { TouslesfichiersComponent } from './touslesfichiers/touslesfichiers.component';


@NgModule({
  declarations: [
    TouslesfichiersComponent
  ],
  imports: [
    CommonModule,
    TouslesfichiersRoutingModule
  ]
})
export class TouslesfichiersModule { }
