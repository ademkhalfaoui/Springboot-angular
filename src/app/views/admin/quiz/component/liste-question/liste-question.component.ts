import { Component, OnInit } from '@angular/core';
import { Question } from '../../../../../layout/monclasse/Question';
import { ShareserviceService } from '../../../../../services/shareservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-question',
  templateUrl: './liste-question.component.html',
  styleUrls: ['./liste-question.component.css']
})
export class ListeQuestionComponent implements OnInit {
  questions: Question[] = [];
  questionIdToDelete: number | null = null;

  constructor(private share: ShareserviceService, private router: Router) {}

  ngOnInit(): void {
    this.share.getAllQuestions().subscribe(
      (data) => {
        this.questions = data;
      }
    );
  }

  ajouter() {
    this.router.navigate(['admin/quiz/question']);
  }

  openDeleteModal(id: number): void {
    this.questionIdToDelete = id;
    const modalElement = document.getElementById('deleteConfirmationModal');
    if (modalElement) {
      modalElement.style.display = 'block';
      modalElement.classList.add('show');
      modalElement.setAttribute('aria-modal', 'true');
      modalElement.setAttribute('role', 'dialog');
    }
  }

  closeModal(): void {
    const modalElement = document.getElementById('deleteConfirmationModal');
    if (modalElement) {
      modalElement.style.display = 'none';
      modalElement.classList.remove('show');
      modalElement.removeAttribute('aria-modal');
      modalElement.removeAttribute('role');
    }
    this.questionIdToDelete = null;
  }

  confirmDelete(): void {
    if (this.questionIdToDelete !== null) {
      this.share.deleteQuestion(this.questionIdToDelete).subscribe(
        () => {
          this.questions = this.questions.filter(q => q.id !== this.questionIdToDelete);
          this.closeModal();
        }
      );
    }
  }

  modifierQuestion(id: number) {
    this.router.navigate(['admin/quiz/question', id]);
  }
}