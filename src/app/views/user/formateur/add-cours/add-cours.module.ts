import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCoursRoutingModule } from './add-cours-routing.module';
import { AddcoursComponent } from './addcours/addcours.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddcoursComponent
  ],
  imports: [
    CommonModule,
    AddCoursRoutingModule,
    FormsModule
  ]
})
export class AddCoursModule { }
