import { Component, OnInit } from '@angular/core';
import { ShareserviceService } from '../../../services/shareservice.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { utilisateur } from '../../../layout/monclasse/utilisateur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allformateurs',
  templateUrl: './allformateurs.component.html',
  styleUrl: './allformateurs.component.css'
})
export class AllformateursComponent implements OnInit {
  utilisateurs:utilisateur[]=[];
  constructor(private share:ShareserviceService,private jwtHelper:JwtHelperService,private router:Router){

  }
  ngOnInit(): void {
    this.getFormateur()
    this.deleteFormateur
  }
  
go(path:string){
  return this.router.navigate([path])
}
  getFormateur():void{
    const token = localStorage.getItem('token');
    console.log('abc', token);

    if (!token) {
      console.error('Aucun token trouvé');
      return;
    }

    try {
      const decodedToken = this.jwtHelper.decodeToken(token);
      console.log('role', decodedToken.role);
     
      this.share.getFormateursByRole(decodedToken.role)
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
  deleteFormateur(formateurId: number) {
    this.share.deleteFormateur(formateurId).subscribe(
      () => {
        // Gérer le succès de la suppression
        console.log('Formateur supprimé avec succès');
        this.router.navigate(['/admin/allformateurs'])
      },
      (error) => {
        // Gérer les erreurs
        console.error('Erreur lors de la suppression du formateur', error);
      }
    );
  }
}
