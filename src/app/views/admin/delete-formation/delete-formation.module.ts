import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteFormationRoutingModule } from './delete-formation-routing.module';
import { DeleteFormationComponent } from './delete-formation/delete-formation.component';


@NgModule({
  declarations: [
    DeleteFormationComponent
  ],
  imports: [
    CommonModule,
    DeleteFormationRoutingModule
  ]
})
export class DeleteFormationModule { }
