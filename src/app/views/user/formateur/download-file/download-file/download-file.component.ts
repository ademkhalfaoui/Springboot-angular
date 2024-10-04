import { Component, OnInit } from '@angular/core';
import { ShareserviceService } from '../../../../../services/shareservice.service';
import { FileInfo } from '../../../../../layout/monclasse/FileInfo';
import { utilisateur } from '../../../../../layout/monclasse/utilisateur';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-download-file',
  templateUrl: './download-file.component.html',
  styleUrl: './download-file.component.css'
})
export class DownloadFileComponent implements OnInit {
downloadfile(id:string,nom:string) {
this.share.downloadFile(id).subscribe(response => {
  this.createFileFromBlob(response, nom);
}, error => {
  console.error('Erreur lors du téléchargement du fichier:', error);
});
}

  listcours:FileInfo []=[];
  fileInfo:FileInfo[]=[]
  
  constructor(private share:ShareserviceService,private jwtHelper: JwtHelperService,private router:Router){}
 
  private createFileFromBlob(blob: Blob, filename: string): void {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    window.URL.revokeObjectURL(url);
  }
  
  
  ngOnInit() {
    this.share.listcours().subscribe(
      (listcours:FileInfo[])=>{
        this.listcours=listcours
      }
    )
    this.getFile()
    this.deleteFile
  }
  getFile() {
    
    let token = localStorage.getItem('token')
    if(token!==null){
      const id =this.jwtHelper.decodeToken(token).id;
      console.log('id'+id);
      this.share.getFileById(id)
      .subscribe(FileInfo => this.fileInfo = FileInfo);
    }
  }
  deleteFile(id: string) {
    console.log(id)
    this.share.deleteFile(id).subscribe(
      () => {
        window.alert("Formation supprimé avec succès");
        console.log('Formation supprimé avec succès');
      },
      (error) => {
        // Gérer les erreurs
        console.error('Erreur lors de la suppression du formateur', error);
      }
    );
  }
}
