import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    UserLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ]
})
export class LayoutModule { }
