import { Component, OnInit } from '@angular/core';
import { ShareserviceService } from '../../../../services/shareservice.service';
import { formateur } from '../../../../layout/monclasse/Formateur';
import { JwtHelperService } from '@auth0/angular-jwt';
import { utilisateur } from '../../../../layout/monclasse/utilisateur';

@Component({
  selector: 'app-espace',
  templateUrl: './espace.component.html',
  styleUrl: './espace.component.css'
})
export class EspaceComponent implements OnInit {
  formateur:formateur;
  utilisateur:utilisateur;
  nom:string;
  prenom:string;
  constructor(private share:ShareserviceService,private jwtHelper: JwtHelperService){}

    ngOnInit(): void {
      
      this.getFormateur();
      this.initNomPrenom();
    }
    
    getFormateur(): void {

      let token = localStorage.getItem('token')
      if(token!==null){
        const id =this.jwtHelper.decodeToken(token).id;
        console.log('id'+id);
        this.share.getFormateurById(id)
        .subscribe(formateur => this.formateur = formateur);
      }
   // or any other ID}
    }
     initNomPrenom(){
      let token = localStorage.getItem('token')
      if(token!==null){
   
    this.nom=this.jwtHelper.decodeToken(token).nom
    this.prenom=this.jwtHelper.decodeToken(token).prenom
  }

     } 
  }


