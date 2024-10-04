import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateFormateurComponent } from './update-formateur/update-formateur.component';

const routes: Routes = [
  {
    path:'',component:UpdateFormateurComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateFormateurRoutingModule { }
