import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrl: './formations.component.css'
})
export class FormationsComponent implements OnInit {
  
  dataArray:any

  constructor(private http:HttpClient){
  
    this.http.head("ademadem")
    this.http.get('http://localhost:8080/api/v1/formations').subscribe(data=>this.dataArray=data)
  }
  ngOnInit() {
    
  }
}
