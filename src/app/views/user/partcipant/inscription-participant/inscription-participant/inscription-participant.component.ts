import { Component, OnInit } from '@angular/core';
import { partcipant} from "../../../../../layout/monclasse/Participant";
import { ShareserviceService } from '../../../../../services/shareservice.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-inscription-participant',
  templateUrl: './inscription-participant.component.html',
  styleUrl: './inscription-participant.component.css'
})
export class InscriptionParticipantComponent implements OnInit {
  participant:partcipant=
  {id:0,
  nom :'' ,
  prenom:'', 
  theme_formation:'',
 
  Periode : '',
  Horaire:'',
  num_cin:0}

 
  constructor(private share:ShareserviceService ,private router:Router){}
  ngOnInit(): void {
    
  }
  add(d:NgForm){
  
 
    this.share.inscription_participant(this.participant).subscribe((data:partcipant)=>{console.log(partcipant)
    if (data!==null){
      window.alert('partcipant inscrit à la formation avec  succés !')
      this.router.navigate(["participant"])
    }
    })
  }
}
