// src/app/components/logout/logout.component.ts
import { Component } from '@angular/core';
;
import { ShareserviceService } from '../../../../services/shareservice.service';

@Component({
  selector: 'app-logout',
  template: '<button (click)="logout()">Logout</button>',
})
export class LogoutComponent {

  constructor(private share: ShareserviceService) { }

  logout() {
    this.share.logout();
  }
}
