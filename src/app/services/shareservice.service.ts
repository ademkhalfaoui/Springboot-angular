import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { profile } from 'console';
import { formation } from '../layout/monclasse/foramtion';
import { BehaviorSubject, Observable } from 'rxjs';
import { utilisateur } from '../layout/monclasse/utilisateur';
import { cours } from '../layout/monclasse/Cours';
import { partcipant } from '../layout/monclasse/Participant';
import {  HttpHeaders } from '@angular/common/http';
import { formateur } from '../layout/monclasse/Formateur';
import { FileInfo } from '../layout/monclasse/FileInfo';
import { Question } from '../layout/monclasse/Question';
import { Reponse } from '../layout/monclasse/Reponse';
import { ReponseParticipant } from '../layout/monclasse/Reponseparticipant';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class ShareserviceService {

  getFormationById(num_action: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient,private router:Router,private helper:JwtHelperService) {}

    Addformation(profile:formation):Observable<formation>{
      return  this.http.post<formation>("http://localhost:8080/api/v1/addformations",profile)
    }
 
    inscription(user:any):Observable<any>{

      return this.http.post<any>("http://localhost:8080/api/v1/adduser",user)
    }
   
    login(user:any):Observable<any>{

      return this.http.post<any>("http://localhost:8080/api/v1/login",user)
    }

    AddCours(profile:cours):Observable<cours>{
      return this.http.post<cours>("http://localhost:8080/api/v2/addCours",profile)
    }
    inscription_participant(profile:partcipant):Observable<partcipant>{
      return this.http.post<partcipant>("http://localhost:8080/api/v3/inscription",profile)
    }

    private logoutUrl = 'http://localhost:8080/logout'; // Replace with your backend logout endpoint URL

  

  logout() {
    return this.http.post(this.logoutUrl, {});
  }

  private baseURL = 'http://localhost:8080/api/v1/update'; // Assurez-vous que votre URL de base est correcte

 

  modifierFormation(numAction: number, formation: formation): Observable<object> {
    const url = `${this.baseURL}`;
    return this.http.put(url, formation);
  }
  uploadfile(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('nom_fichier', file.name);
    return this.http.post('http://localhost:8080/upload', formData, {
    reportProgress: true,
    responseType: 'text'
    });
    }
    private baseUrl = 'http://localhost:8080/api/v4/formateurs';
    getFormateurById(id: number): Observable<formateur> {
      return this.http.get<formateur>(`${this.baseUrl}/${id}`);
  }
  private baseUrl1 = 'http://localhost:8080/api/v3/Participant';
  getParticipantById(id: number): Observable<utilisateur> {
    return this.http.get<utilisateur>(`${this.baseUrl1}/${id}`);
}
    
private baseUrl2 = 'http://localhost:8080/api/v1/participants';

getParticipantByRole(role:Text): Observable<utilisateur[]> {
  console.log(role)
  return this.http.get<utilisateur[]>(`${this.baseUrl2}`);
}
      
private baseUrl3 = 'http://localhost:8080/api/v4/allformateur/Formateur';

getFormateursByRole(role:Text): Observable<utilisateur[]> {
  console.log(role)
  return this.http.get<utilisateur[]>(`${this.baseUrl3}`);
}
private baseurl4='http://localhost:8080/api/v4/formateurs'
deleteFormateur(formateurId: number) {
  return this.http.delete(`${this.baseurl4}/${formateurId}`);
}

ajoutercours(formData:FormData):Observable<FileInfo>{
  return this.http.post<FileInfo>("http://localhost:8080/upload",formData)
}

downloadFile(fileId: string): Observable<Blob> {
  return this.http.get(`http://localhost:8080/download/${fileId}`, { responseType: 'blob' });

}
listcours(): Observable<FileInfo[]> {
  return this.http.get<FileInfo[]>(`http://localhost:8080/filesformateurs`);}
 
formateurname(): Observable<utilisateur[]> {
    return this.http.get<utilisateur[]>(`http://localhost:8080/api/v1/Utilisateurs`)}

private baseurl5='http://localhost:8080/api/v4/participants';
deleteParticipant(participantId: number) {
  return this.http.delete(`${this.baseurl5}/${participantId}`);
}
private baseurl6='http://localhost:8080/api/v1/formation/delete';
deleteFormation(num_action:number) {
  return this.http.delete(`${this.baseurl6}/${num_action}`);
}
getFileById(id: number): Observable<FileInfo[]> {
  return this.http.get<FileInfo[]>(`${this.baseUrl}/${id}`);
}
private baseurl7='http://localhost:8080/filedetails/delete'
deleteFile(id:string) {
  return this.http.delete(`${this.baseurl7}/${id}`);
}

recupérerFormations():Observable<formation[]>{
  return  this.http.get<formation[]>('http://localhost:8080/api/v1/formations');

}

listfichiers(): Observable<FileInfo[]> {
  return this.http.get<FileInfo[]>(`http://localhost:8080/touslesfiles`);}
 
 

  getAllfilesByformateur(id:number): Observable<FileInfo[]> {
    const params = new HttpParams().set('id_utilisateur', id);
    return this.http.get<FileInfo[]>(`http://localhost:8080/filesparformateur`,{params});}
    
    private baseurl8='http://localhost:8080/filedetails/delete'
    deleteFile1(id:string) {
      return this.http.delete(`${this.baseurl8}/${id}`);
    }
    pdfUrl: string ='http://localhost:8080/download'
    downloadPdfById(id: string): Observable<any> {
      const url = `${this.pdfUrl}/${id}`;
      const headers = new HttpHeaders()
        .set('Accept', 'application/pdf');
  
      return this.http.get(url, { headers: headers, responseType: 'blob' });
    }


    getAllQuestions():Observable<Question[]>{
      return this.http.get<Question[]>('http://localhost:8080/api/v5/quiz/questions')
    }

    creerQuestion(question:Question):Observable<Question>{
      return this.http.post<Question>('http://localhost:8080/api/v5/quiz/questions',question)
    }
    updateQuestion(questionId: number, question: Question): Observable<Question> {
      return this.http.put<Question>(`http://localhost:8080/api/v5/quiz/questions/${questionId}`, question);
    }
    deleteQuestion(questionId: number): Observable<void> {
      return this.http.delete<void>(`http://localhost:8080/api/v5/quiz/questions/${questionId}`);
    }
    getQuestion(questionId: number): Observable<Question> {
      return this.http.get<Question>(`http://localhost:8080/api/v5/quiz/questions/${questionId}`);
    }
    getQuestions(): Observable<Question[]> {
      return this.http.get<Question[]>('http://localhost:8080/api/v5/quiz/questions');
    }

    submitQuizResponses(responses: Reponse): Observable<any> {
      return this.http.post<any>('http://localhost:8080/api/v5/quiz/reponses', responses);
    }
    private isOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isOpen$: Observable<boolean> = this.isOpenSubject.asObservable();
  toggleMenu(): void {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }
  ajouterAvis(responses: ReponseParticipant[]): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/v5/quiz/addreponseparticipants', responses);
  }
  logout1() {
    this.http.post('/logout', {}).subscribe({
      next: () => {
        localStorage.removeItem('user');
        this.router.navigate(['/loginuser']);
      },
      error: (err) => {
        console.error('Logout failed', err);
      }
    });
  }
  verifloggedIn(){
    let token :any=localStorage.getItem('token')
    if(!token){
      return false
    }
    let  decodedToken=this.helper.decodeToken(token)
    if(decodedToken.role) {
      return false
    }
    return true 
  }
 
  getAll(): Observable<any> {
    return this.http.get(` http://localhost:8080/api/v1/Utilisateurs`);
  }
 apiurl20= 'http://localhost:8080/api/v1/participant'
 getParticipant(id: number): Observable<utilisateur> {
  return this.http.get<utilisateur>(`${this.apiurl20}/${id}`);
}

updateParticipant(id: number, utilisateur: utilisateur): Observable<utilisateur> {
  return this.http.put<utilisateur>(`${this.apiurl20}/${id}`, utilisateur);
}
apiurl21= 'http://localhost:8080/api/v4/formateurs'
getformateur(id: number): Observable<utilisateur> {
 return this.http.get<utilisateur>(`${this.apiurl21}/${id}`);
}

updateFormateur(id: number, utilisateur: utilisateur): Observable<utilisateur> {
 return this.http.put<utilisateur>(`${this.apiurl21}/${id}`, utilisateur);
}
private baseUrl33 = 'http://localhost:8080/api/v1'; // Remplacez par l'URL de votre API



getFormation(num_action: number): Observable<formation> {
  return this.http.get<formation>(`${this.baseUrl33}/formation/${num_action}`);
}

updateFormation(num_action: number, formation: formation): Observable<formation> {
  return this.http.put<formation>(`${this.baseUrl33}/formation/${num_action}`, formation);
}
}
