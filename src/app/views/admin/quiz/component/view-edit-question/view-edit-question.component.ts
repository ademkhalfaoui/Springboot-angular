import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareserviceService } from '../../../../../services/shareservice.service';
import { Reponse } from '../../../../../layout/monclasse/Reponse';
import { Question } from '../../../../../layout/monclasse/Question';


@Component({
  selector: 'view-edit-question',
  templateUrl: './view-edit-question.component.html',
  styleUrls: ['./view-edit-question.component.css']
})
export class ViewEditQuestionComponent implements OnInit {
  questionForm: FormGroup;
  isSubmitted = false;
  questionId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private share: ShareserviceService
  ) {
    this.questionForm = this.fb.group({
      questionText: ['', Validators.required],
      reponses: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.questionId = this.route.snapshot.params['id'];
    if (this.questionId) {
      this.share.getQuestion(this.questionId).subscribe((question: Question) => {
        this.questionForm.patchValue({
          questionText: question.questionText
        });
        this.reponses.clear();
        question.reponses.forEach((reponse: Reponse) => {
          this.reponses.push(this.fb.control(reponse.reponseText, Validators.required));
        });
      });
    } else {
      this.addResponse();
    }
  }

  get reponses(): FormArray {
    return this.questionForm.get('reponses') as FormArray;
  }

  addResponse(): void {
    this.reponses.push(this.fb.control('', Validators.required));
  }

  removeResponse(index: number): void {
    this.reponses.removeAt(index);
  }

  submitForm(): void {
    this.isSubmitted = true;
    if (this.questionForm.valid) {
      const reponses: Reponse[] = this.reponses.value.map((item: string) => ({
        reponseText: item
      }));

      const question: Question = {
        questionText: this.questionForm.value.questionText,
        reponses: reponses
      } as Question;

      if (this.questionId) {
        this.share.updateQuestion(this.questionId, question).subscribe(
          () => this.router.navigate(['admin/quiz/questions'])
        );
      } else {
        this.share.creerQuestion(question).subscribe(
          () => this.router.navigate(['admin/quiz/questions'])
        );
      }
    } else {
      console.log('Formulaire invalide');
    }
  }
}