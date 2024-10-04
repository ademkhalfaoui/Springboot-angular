import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateFormateurRoutingModule } from './update-formateur-routing.module';
import { UpdateFormateurComponent } from './update-formateur/update-formateur.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdateFormateurComponent
  ],
  imports: [
    CommonModule,
    UpdateFormateurRoutingModule,
    ReactiveFormsModule
  ]
})
export class UpdateFormateurModule { }
