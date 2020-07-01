import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AddorupdateuserComponent} from './addorupdateuser/addorupdateuser.component';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import {AddorupdateuserModule} from './addorupdateuser/addorupdateuser.module';
import {PNotifyService} from './service/pnotify.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AddorupdateuserModule
  ],
  entryComponents: [
    AddorupdateuserComponent
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    PNotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
