import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import {AddorupdateuserModule} from '../addorupdateuser/addorupdateuser.module';

const routes: Routes = [{ path: '', component: UsersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
