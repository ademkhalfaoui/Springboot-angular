import { Component, OnInit } from '@angular/core';
import { FileInfo } from '../../../../layout/monclasse/FileInfo';
import { ShareserviceService } from '../../../../services/shareservice.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css'
})
export class CoursComponent  implements OnInit{
  downloadfile(id:string,nom:string) {
    this.share.downloadFile(id).subscribe(response => {
      this.createFileFromBlob(response, nom);
    }, error => {
      console.error('Erreur lors du téléchargement du fichier:', error);
    });
    }
   
    listcours:FileInfo []=[];
    
   
    constructor(private share:ShareserviceService,private router:Router,private http:HttpClient){}
   
    private createFileFromBlob(blob: Blob, filename: string): void {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.click();
      window.URL.revokeObjectURL(url);
    }
   
   
    deleteCours(id:string) {
      console.log(id)
      this.share.deleteFile1(id).subscribe(
        () => {
          window.alert("Cours supprimé avec succès");
          console.log('Cours supprimé avec succès');
          this.router.navigate(['/admin/download']);
        },
        (error) => {
         
          console.error('Erreur lors de la suppression du Cours', error);
        }
      );
    }
   
    ngOnInit(): void {
      this.share.listfichiers().subscribe(
        (listcours:FileInfo[])=>{
          this.listcours=listcours
        }
      )
      this.downloadPdf;
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