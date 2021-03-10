import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ListComponent } from './components/list/list.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  { path: 'auth', component: AuthenticationComponent },
  {
    path: 'list', canActivate: [AuthenticationGuard], children: [
      {
        path: ':type',
        component: ListComponent
      }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
