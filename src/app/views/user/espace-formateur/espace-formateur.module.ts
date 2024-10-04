import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspaceFormateurRoutingModule } from './espace-formateur-routing.module';
import { FormateurComponent } from './formateur/formateur.component';
import { EspaceComponent } from './espace/espace.component';


@NgModule({
  declarations: [
    FormateurComponent,
    EspaceComponent
  ],
  imports: [
    CommonModule,
    EspaceFormateurRoutingModule
  ]
})
export class EspaceFormateurModule { }
