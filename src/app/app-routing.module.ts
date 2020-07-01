import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path : '', redirectTo : '/users' , pathMatch : 'full'},
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'addorupdateuser', loadChildren: () => import('./addorupdateuser/addorupdateuser.module').then(m => m.AddorupdateuserModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
