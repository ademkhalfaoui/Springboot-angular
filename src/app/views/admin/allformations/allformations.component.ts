import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShareserviceService } from '../../../services/shareservice.service';
import { formation } from '../../../layout/monclasse/foramtion';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-allformations',
  templateUrl: './allformations.component.html',
  styleUrl: './allformations.component.css'
})
export class AllformationsComponent implements OnInit {
  dataArray:formation[]=[]

  constructor(private share:ShareserviceService,private router:Router){


   // this.http.get('http://localhost:8080/api/v1/formations').subscribe(data=>this.dataArray=data)
  }
  ngOnInit() :void{
    alert(0)
    this.deleteFormation
  this.share.recupérerFormations().subscribe(data=>this.dataArray=data)


  }
  go(path:string){
    this.router.navigate([path]);

  }
  deleteFormation(num_action:number) {
    console.log(num_action)
    this.share.deleteFormation(num_action).subscribe(
      () => {
        window.alert("Formation supprimé avec succès");
        console.log('Formation supprimé avec succès');
        this.router.navigate(['/admin/allformations']);
      },
      (error) => {
       
        console.error('Erreur lors de la suppression du formation', error);
      }
    );
  }
}
