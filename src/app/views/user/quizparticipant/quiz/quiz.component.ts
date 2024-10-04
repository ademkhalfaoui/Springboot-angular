import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShareserviceService } from '../../../../services/shareservice.service';
import { Question } from '../../../../layout/monclasse/Question';
import { Reponse } from '../../../../layout/monclasse/Reponse';
import { Router } from '@angular/router';
import { ReponseParticipant } from '../../../../layout/monclasse/Reponseparticipant';
import { JwtHelperService } from '@auth0/angular-jwt';
import { utilisateur } from '../../../../layout/monclasse/utilisateur';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizForm: FormGroup;
  questions: Question[] = [];

  constructor(private fb: FormBuilder, private share: ShareserviceService,private router:Router ,private jwthelper:JwtHelperService) {
    this.quizForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.share.getAllQuestions().subscribe(data => {
      this.questions = data;
      this.questions.forEach((question, index) => {
        this.quizForm.addControl('response' + index, this.fb.control('', Validators.required));
        this.quizForm.addControl('question' + index, this.fb.control(question.id));
      });
    });
  }
  mapToReponseParticipants(input: any): ReponseParticipant[] {
    const reponseParticipants: ReponseParticipant[] = [];
  
    const keys = Object.keys(input);
    const responseKeys = keys.filter(key => key.startsWith('response'));
    const questionKeys = keys.filter(key => key.startsWith('question'));
  let user:utilisateur 
    responseKeys.forEach((responseKey, index) => {
      const questionKey = `question${index}`;
      
      if (input[responseKey] && input[questionKey]) {
        const reponse: Reponse = { id:input[responseKey] }as Reponse;
        const question: Question = { id: input[questionKey] } as Question; // Vous devrez peut-être récupérer le texte de la question d'une autre source
        const token = localStorage.getItem('token');
        console.log('abc', token);
    
        if (!token) {
          console.error('Aucun token trouvé');
          return;
        }
    
        try {
          const decodedToken = this.jwthelper.decodeToken(token);
        user={id:decodedToken.id} as utilisateur
          console.log('role', decodedToken.role);
        }
        catch (error) {
          console.error('Erreur lors du décodage du token', error);
        }  
        const reponseParticipant: ReponseParticipant = {
         
          utilisateur: user,
          reponse: reponse,
          question: question
        }as ReponseParticipant
  
        reponseParticipants.push(reponseParticipant);
      }
    });
  
    return reponseParticipants;
  }
  
  submitQuiz(): void {
   
    if (this.quizForm.valid) {
      const Body= this.mapToReponseParticipants(this.quizForm.value)
    console.log(this.quizForm.value)
    this.share.ajouterAvis(Body).subscribe(
      response => {
        // Naviguer vers une autre route après une soumission réussie
        window.alert('Merci pour votre attention !! ')
        this.router.navigate(['/downloadfile']);
      },
      error => {
        console.error('Erreur lors de l\'ajout de l\'avis', error);
      }
    );
    
    
    
    }else {
      console.log('Formulaire invalide');
    }
  }
  
}
