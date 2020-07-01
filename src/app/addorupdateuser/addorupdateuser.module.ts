import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddorupdateuserRoutingModule } from './addorupdateuser-routing.module';
import { AddorupdateuserComponent } from './addorupdateuser.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';


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
  ]
})
export class AddorupdateuserModule { }
