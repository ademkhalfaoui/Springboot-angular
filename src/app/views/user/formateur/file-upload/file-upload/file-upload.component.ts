import { Component, OnInit } from '@angular/core';

import { FileInfo } from '../../../../../layout/monclasse/FileInfo'
import { ShareserviceService } from '../../../../../services/shareservice.service';

import { Router } from '@angular/router';
import { Subscription, share } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
// Importer la classe FileInfo

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
  
})
export class FileUploadComponent  implements OnInit{
  nomFichier: string;
  nomFormateur: string;
  codeCours: string;
  selectedFile: File;

  ngOnInit(): void {
   
  }



  

  constructor(private share:ShareserviceService,private router:Router,private http:HttpClient) {
  
  }

  resportProgress(event: HttpEvent<string[]>) {
    throw new Error('Method not implemented.');
  }
  onFileSelected(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
        this.selectedFile = event.target.files[0];
    }
}
  ajouter(){
    const formData = new FormData();
    formData.append('nom_fichier', this.selectedFile.name);
    formData.append('nom_formateur', this.nomFormateur);
    formData.append('code_cours', this.codeCours);
    console.log(this.selectedFile)
    formData.append('file', this.selectedFile, this.selectedFile.name);
   
    this.share.ajoutercours(formData).subscribe((data:FileInfo)=>{console.log(data)
    if (data!==null){
      window.alert('cours ajouter avec succés !')
      this.router.navigate(["dow"])
    }
    })
  }
}