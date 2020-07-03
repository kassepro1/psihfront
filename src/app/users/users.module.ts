import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import {
  MAT_DIALOG_DEFAULT_OPTIONS, MatButtonModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule, MatTooltip, MatTooltipModule
} from '@angular/material';
import {AddorupdateuserComponent} from '../addorupdateuser/addorupdateuser.component';
import {AddorupdateuserModule} from '../addorupdateuser/addorupdateuser.module';
import {UserService} from '../service/user.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    HttpClientModule
  ],
  providers: [UserService]
})
export class UsersModule { }
