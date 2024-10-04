import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadFileComponent } from './download-file/download-file.component';

const routes: Routes = [
  {
    path:'',component:DownloadFileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadFileRoutingModule { }
