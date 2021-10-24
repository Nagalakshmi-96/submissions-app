import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubmissionListModule } from './submission-list/submission-list.module';
import { PlayerDetailsModule } from './player-details/player-details.module';



import { AppRoutingModule } from './app-routing';

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SubmissionListModule,
    PlayerDetailsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
