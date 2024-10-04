import { Component, OnInit } from '@angular/core';
import { ShareserviceService } from '../../../../../services/shareservice.service';
import { Router } from '@angular/router';
import { FileInfo } from '../../../../../layout/monclasse/FileInfo';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-touslesfichiers',
  templateUrl: './touslesfichiers.component.html',
  styleUrl: './touslesfichiers.component.css'
})
export class TouslesfichiersComponent implements OnInit{
  downloadfile(id:string,nom:string) {
    this.share.downloadFile(id).subscribe(response => {
      this.createFileFromBlob(response, nom);
    }, error => {
      console.error('Erreur lors du téléchargement du fichier:', error);
    });
    }
   
    listcours:FileInfo []=[];
   
   
    constructor(private share:ShareserviceService,private router:Router){}
   
    private createFileFromBlob(blob: Blob, filename: string): void {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.click();
      window.URL.revokeObjectURL(url);
    }
   
   
   
   
    ngOnInit(): void {
      this.share.listfichiers().subscribe(
        (listcours:FileInfo[])=>{
          this.listcours=listcours
        }
      )
    }
goToQuiz(path:string){
  this.router.navigate([path])
}

    downloadPdf(id:string) {

      const headers = new HttpHeaders()
      this.share.downloadPdfById(id).subscribe((response: Blob) => {
        const file = new Blob([response], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      });  
  }
}
