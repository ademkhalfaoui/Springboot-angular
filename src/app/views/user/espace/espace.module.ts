import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspaceRoutingModule } from './espace-routing.module';
import { EspaceComponent } from './espace/espace.component';


@NgModule({
  declarations: [
    EspaceComponent
  ],
  imports: [
    CommonModule,
    EspaceRoutingModule
  ]
})
export class EspaceModule { }
