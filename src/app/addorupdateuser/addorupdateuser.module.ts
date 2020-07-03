import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddorupdateuserRoutingModule } from './addorupdateuser-routing.module';
import { AddorupdateuserComponent } from './addorupdateuser.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {PNotifyService} from '../service/pnotify.service';
import {UserService} from '../service/user.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [AddorupdateuserComponent],
  imports: [
    CommonModule,
    AddorupdateuserRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ]
})
export class AddorupdateuserModule { }
