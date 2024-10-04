import { Component, OnInit } from '@angular/core';
import { ShareserviceService } from '../../../../../services/shareservice.service';
import { Router } from '@angular/router';
import { cours } from '../../../../../layout/monclasse/Cours';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-addcours',
  templateUrl: './addcours.component.html',
  styleUrl: './addcours.component.css'
})
export class AddcoursComponent implements OnInit {
  cours:cours=
  {id:0,
  nom_cours:'',
  code_cours: '',
  theme_formation: '',
  nom_formateur :''}

 
  constructor(private share:ShareserviceService ,private router:Router){}
  ngOnInit(): void {
    
  }
  add(v:NgForm){
  
 
    this.share.AddCours(this.cours).subscribe((data:cours)=>{console.log(data)
    if (data!==null){
      window.alert('cours ajouter avec succés !')
      this.router.navigate(["Formateur"])
    }
    })
  }
}
