import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShareserviceService } from '../../../../services/shareservice.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrl: './formateur.component.css'
})
export class FormateurComponent implements OnInit,OnDestroy {
  dataArray:any
 subscribtion= new  Subscription()


  constructor(private http:HttpClient ,private share:ShareserviceService,private router:Router){
  
    this.http.get('http://localhost:8080/api/v2/cours').subscribe(data=>this.dataArray=data)
  
  }
  uploadFile(event:Event) {
    const element = event.target as HTMLInputElement;
    let file:File  
    if (element.files) {
      file =   element.files[0];
      if (file) {
        this.subscribtion.add(
        this.share.uploadfile(file).subscribe(
          (response:unknown) =>{
             console.log(response);
          this.router.navigate(['/Formateur']);
          },
          (error:unknown) => console.error(error))
          );
       }
    }
  
   
    }
    
  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}

