import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteFormateurRoutingModule } from './delete-formateur-routing.module';
import { DeleteFormateurComponent } from './delete-formateur/delete-formateur.component';


@NgModule({
  declarations: [
    DeleteFormateurComponent
  ],
  imports: [
    CommonModule,
    DeleteFormateurRoutingModule
  ]
})
export class DeleteFormateurModule { }
