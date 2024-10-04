import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteFormateurComponent } from './delete-formateur/delete-formateur.component';

const routes: Routes = [
  {
    path:'',component:DeleteFormateurComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteFormateurRoutingModule { }
