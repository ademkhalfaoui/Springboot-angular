import { Component } from '@angular/core';
import { ShareserviceService } from '../../services/shareservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css'
})
export class UserLayoutComponent {
verifuser:any
  constructor(private share:ShareserviceService,private router:Router){}
  go(path:string){
    this.router.navigate([path]);
if (this.share.verifloggedIn()==true){
  this.verifuser=true

}
else
this.verifuser=false
  }
 
  toggleMenu(): void {
    this.share.toggleMenu();
  }
  logout1() {
    this.share.logout1();
    this.router.navigate(['/loginuser'])
  }


}
