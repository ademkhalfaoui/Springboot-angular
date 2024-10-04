import { Component, OnInit } from '@angular/core';
import { ShareserviceService } from '../../../../services/shareservice.service';
import { formation } from '../../../../layout/monclasse/foramtion';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addformation',
  templateUrl: './addformation.component.html',
  styleUrl: './addformation.component.css'
})
export class AddformationComponent implements OnInit{
  formation: formation={
    num_action: 0,
    num_salle: 0,
    Entreprise: '',
    theme_formation: '',
    Mode_formation: '',
    Lieu_formation: '',
    Gouvernorat: '',
    Periode: '',
    Horaire: '',
    Credit_Impot: '',
    droit_tirage_collectif: '',
    droit_tirage_individuel: '',
    formateur:''
  };

  constructor(private share:ShareserviceService ,private router:Router){}
  ngOnInit(): void {
    
  }
  add(f:NgForm){
  
 
    this.share.Addformation(this.formation).subscribe((data:formation)=>{console.log(data)
    if (data!==null){
      window.alert('fomation ajouter avec succés !')
      this.router.navigate(["/admin/allformations"])
    }
    })
  }
}
