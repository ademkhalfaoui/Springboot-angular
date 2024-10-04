import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShareserviceService } from '../../../../services/shareservice.service';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrl: './loginuser.component.css',
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService]
})
export class LoginuserComponent {
loginForm: FormGroup;


  constructor(private builder:FormBuilder,private share:ShareserviceService, private jwtHelper: JwtHelperService, private router: Router){
    this.loginForm=this.builder.group({
      username:[],
      password:[]
    })
  }



  login(){
    this.share.login(this.loginForm.value).subscribe(res=>{
      console.log(res);
      if(res.token!=null){
        console.log(this.jwtHelper.decodeToken(res.token))
        localStorage.setItem('token',res.token)
        let role=this.jwtHelper.decodeToken(res.token).role;
        console.log('role : '+role);
        if(role=="formateur"){
          this.router.navigate(['/espace'])
        }
        if(role=="Admin"){
          this.router.navigate(['/admin/allformations'])

        }
        if(role=="participant" || role=='participantAR'){
          this.router.navigate(['/participant'])
        }
      }else{
        alert('verifier vos donnees')
      }
      
    })
  }
  
}
