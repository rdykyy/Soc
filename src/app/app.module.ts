import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FacebookLoginComponent } from './components/facebook-login/facebook-login.component';

import {FacebookService, FacebookLoginResponse} from 'ng2-facebook-sdk';


@NgModule({
  declarations: [
    AppComponent,
    FacebookLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FacebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
