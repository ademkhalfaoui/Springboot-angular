import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginuserComponent } from '../views/user/loginuser/loginuser/loginuser.component';
import { AuthGuard } from './guards/auth.guard';
import { ProtectedComponent } from '../protected/protected/protected.component';

const routes: Routes = [
  { path: 'protected-route', component: ProtectedComponent, canActivate: [AuthGuard] },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuardRoutingModule { }
