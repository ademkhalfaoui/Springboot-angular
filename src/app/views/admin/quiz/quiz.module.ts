import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { ListeQuestionComponent } from './component/liste-question/liste-question.component';
import { QuizComponent } from './component/quiz/quiz.component';
import { ViewEditQuestionComponent } from './component/view-edit-question/view-edit-question.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListeQuestionComponent,
    QuizComponent,
    ViewEditQuestionComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    ReactiveFormsModule
  ]
})
export class QuizModule { }
