import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileInfo } from '../layout/monclasse/FileInfo';

@Injectable({
  providedIn: 'root'
})
export class FormateurserviceService {

  constructor(private http:HttpClient){ }
  
  
  public getAllFormateurFile():Observable<Array<FileInfo>>{
 return this.http.get<Array<FileInfo>>(`http://localhost:8080/filesformateurs`);}

  
}
