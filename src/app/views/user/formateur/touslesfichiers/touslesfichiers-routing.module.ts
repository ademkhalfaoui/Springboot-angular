import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TouslesfichiersComponent } from './touslesfichiers/touslesfichiers.component';

const routes: Routes = [
  {path:'',component:TouslesfichiersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TouslesfichiersRoutingModule { }
