import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareserviceService } from '../../../../services/shareservice.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { utilisateur } from '../../../../layout/monclasse/utilisateur';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrl: './participant.component.css'
})
export class ParticipantComponent implements OnInit{
  dataArray:any
utilisateur:utilisateur;
  constructor(private http:HttpClient,private share:ShareserviceService,private jwtHelper:JwtHelperService,private router:Router){
  
    this.http.get('http://localhost:8080/api/v3/participant-inscrit').subscribe(data=>this.dataArray=data)
  }
  go(path:string){
    this.router.navigate([path]);

  }
  ngOnInit() :void{
   this.getParticipant() 
  }

  getParticipant():void{
    let token = localStorage.getItem('token')
    if(token!==null){
      const id =this.jwtHelper.decodeToken(token).id;
      console.log('id'+id);
      this.share.getParticipantById(id)
      .subscribe(utilisateur => this.utilisateur = utilisateur);
    }
 // or any other
  }
}
