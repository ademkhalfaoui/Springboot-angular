import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizparticipantRoutingModule } from './quizparticipant-routing.module';
import { QuizComponent } from './quiz/quiz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    QuizComponent
  ],
  imports: [
    CommonModule,
    QuizparticipantRoutingModule,
    ReactiveFormsModule,
    FormsModule 
  ]
})
export class QuizparticipantModule { }
