import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShareserviceService } from '../../../services/shareservice.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { utilisateur } from '../../../layout/monclasse/utilisateur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allparticipants',
  templateUrl: './allparticipants.component.html',
  styleUrl: './allparticipants.component.css'
})
export class AllparticipantsComponent implements OnInit{
  dataArray:any
  utilisateurs:utilisateur[]=[];
  constructor(private http:HttpClient,private share:ShareserviceService,private jwtHelper:JwtHelperService,private router:Router
  ){

    this.http.get('http://localhost:8080/api/v1/participants').subscribe(data=>this.dataArray=data)
  }

  go(path:string){
    return this.router.navigate([path])
  }
  ngOnInit():void {
    this.getParticipants()
    this.deleteparticipant
  }
  getParticipants(): void {
    const token = localStorage.getItem('token');
    console.log('abc', token);

    if (!token) {
      console.error('Aucun token trouvé');
      return;
    }

    try {
      const decodedToken = this.jwtHelper.decodeToken(token);
      console.log('role', decodedToken.role);

      this.share.getParticipantByRole(decodedToken.role)
        .subscribe(
          (utilisateurs: utilisateur[]) => {
            this.utilisateurs = utilisateurs;
            console.log('utilisateurs', utilisateurs);
          },
          error => {
            console.error('Erreur lors de la récupération des utilisateurs', error);
          }
        );
    } catch (error) {
      console.error('Erreur lors du décodage du token', error);
    }
  }
  deleteparticipant(participantId:number){this.share.deleteParticipant(participantId).subscribe(
    () => {
     
      console.log('Participant  supprimé avec succès');
      this.router.navigate(['admin/allparticipants'])
    },
    (error) => {
      
      console.error('Erreur lors de la suppression du Participant', error);
    }
  );}
}
