import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddorupdateuserComponent } from './addorupdateuser.component';

const routes: Routes = [{ path: '', component: AddorupdateuserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddorupdateuserRoutingModule { }
