import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormateurRoutingModule } from './formateur-routing.module';
import { FormateurComponent } from './formateur/formateur.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FormateurComponent
  ],
  imports: [
    CommonModule,
    FormateurRoutingModule,
  HttpClientModule,
 
  ]
})
export class FormateurModule { 
 
}
