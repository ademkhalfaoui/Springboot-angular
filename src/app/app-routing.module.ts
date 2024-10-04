import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'',component:AppComponent,children: [
    {path:'',component:UserLayoutComponent , children:[
      {path:'', loadChildren:()=>import('./views/user/home/home.module').then(m=>m.HomeModule)},
      {path:'loginuser', loadChildren:()=>import('./views/user/loginuser/loginuser.module').then(m=>m.LoginuserModule)},
      {path:'formations', loadChildren:()=>import('./views/formations/formations.module').then(m=>m.FormationsModule)},
      {path:'about', loadChildren:()=>import('./views/about/about.module').then(m=>m.AboutModule)},
      {path:'inscription', loadChildren:()=>import('./views/inscription/inscription.module').then(m=>m.InscriptionModule)},
      {path:'Formateur', loadChildren:()=>import('./views/user/formateur/formateur.module').then(m=>m.FormateurModule)},
      {path:'addcours', loadChildren:()=>import('./views/user/formateur/add-cours/add-cours.module').then(m=>m.AddCoursModule)},
      {path:'participant', loadChildren:()=>import('./views/user/partcipant/partcipant.module').then(m=>m.PartcipantModule)},
      {path:"s'inscrire", loadChildren:()=>import('./views/user/partcipant/inscription-participant/inscription-participant.module').then(m=>m.InscriptionParticipantModule)},
      {path:'espaceformateur', loadChildren:()=>import('./views/user/espace-formateur/espace-formateur.module').then(m=>m.EspaceFormateurModule)},
      {path:'espace', loadChildren:()=>import('./views/user/espace/espace.module').then(m=>m.EspaceModule)},
      {path:'ajoutercours', loadChildren:()=>import('./views/user/formateur/file-upload/file-upload.module').then(m=>m.FileUploadModule)},
      {path:'dow', loadChildren:()=>import('./views/user/formateur/download-file/download-file.module').then(m=>m.DownloadFileModule)},
      {path:'downloadfile', loadChildren:()=>import('./views/user/formateur/touslesfichiers/touslesfichiers.module').then(m=>m.TouslesfichiersModule)},
      {path:'quiz', loadChildren:()=>import('./views/user/quizparticipant/quizparticipant.module').then(m=>m.QuizparticipantModule)},
    ]},
    {path:'admin',component:AdminLayoutComponent ,children:[
      {path:'dashboard', loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
      {path:'loginadmin', loadChildren:()=>import('./views/admin/loginadmin/loginadmin.module').then(m=>m.LoginadminModule)},
      {path:'', loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
      {path:'allformations', loadChildren:()=>import('./views/admin/allformations/allformations.module').then(m=>m.AllformationsModule)},
      {path:'allformateurs', loadChildren:()=>import('./views/admin/allformateurs/allformateurs.module').then(m=>m.AllformateursModule)},
      {path:'allparticipants', loadChildren:()=>import('./views/admin/allparticipants/allparticipants.module').then(m=>m.AllparticipantsModule)},
      {path:'addformation', loadChildren:()=>import('./views/admin/addformation/addformation.module').then(m=>m.AddformationModule)},
      {path:'updateformation/:num_action', loadChildren:()=>import('./views/admin/update-formation/update-formation.module').then(m=>m.UpdateFormationModule)},
      {path:'statistique', loadChildren:()=>import('./views/admin/statistique/statistique.module').then(m=>m.StatistiqueModule)},
      {path:'download', loadChildren:()=>import('./views/admin/cours/cours.module').then(m=>m.CoursModule)},
      {path:'quiz', loadChildren:()=>import('./views/admin/quiz/quiz.module').then(m=>m.QuizModule)},
      {path:'modifierparticipant/:id', loadChildren:()=>import('./views/admin/update-participant/update-participant.module').then(m=>m.UpdateParticipantModule)},
      {path:'modifierformateur/:id', loadChildren:()=>import('./views/admin/update-formateur/update-formateur.module').then(m=>m.UpdateFormateurModule)},
    ]}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
