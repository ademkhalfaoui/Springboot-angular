import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './component/quiz/quiz.component';
import { ListeQuestionComponent } from './component/liste-question/liste-question.component';
import { ViewEditQuestionComponent } from './component/view-edit-question/view-edit-question.component';

const routes: Routes = [
  {
    path:'',component:QuizComponent, children:[
      {
        path:'questions',component:ListeQuestionComponent
      },
      {
        path:'question',component:ViewEditQuestionComponent
      }
      ,
      {
        path:'question/:id',component:ViewEditQuestionComponent
      }
    ]
  }
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
